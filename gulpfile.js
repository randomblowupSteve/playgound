var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var uglify        = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');

function bundle(bundler){
	return bundler
		.bundle()
		.on('error', function(e){
			gutil.log(e);
		})
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./app/js/dist'))
		.pipe(browserSync.stream());
}


gulp.task('watch', function(){

	watchify.args.debug = true;

	var watcher = watchify(browserify('./app/js/main.js'), watchify.args)
		.transform('babelify', {presets: ['es2015']});
	bundle(watcher);

	watcher.on('update', function(){
		bundle(watcher);
	});
	
	watcher.on('log', gutil.log);

	browserSync.init({
        server: "./app",
        logFileChanges: false
    });

});

gulp.task('build', function(){
	return gulp.src("app/js/dist/bundle.js")
       .pipe(streamify(uglify()))
       .pipe(gulp.dest('./app/js/product'));
});

gulp.task('default', ['watch']);