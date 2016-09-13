var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var browserSyc = require('browser-sync').create();
var source = require('vinyl-source-stream');
var $ = require('jquery');

gulp.task('browserify', function(){
	return browserify('./js/main.js')
			.bundle()
			.on('error', function(e){
				gutil.log(e);
			})
			.pipe(source('bundle.js'))
			.pipe(gulp.dest('./build/'))
			.pipe(browserSyc.stream());
});

gulp.task('watch', function(){
	gulp.watch('js/main.js', ['browserify']);
});

gulp.task('default', ['watch', 'browserify']);