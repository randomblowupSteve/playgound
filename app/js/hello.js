var jQuery = require('jQuery');
var mixitup = require('mixitup');
var jclock = require('jclock');

class myClass{

	constructor(name){
		this.name = name;
	}

	getmyName(){
		$("#p1").html(`Hello! My Name is ${this.name}`);
	}

	shuffle(){
		$('#Container').mixItUp();
	}

	clock(){
		$('.time').each(function() {
	        var myUtc = $(this).data('utc');
	        var myUtcOffset = $(this).data('utc-offset');
	        $(this).jclock({
	            utc: myUtc ,
	            utcOffset: myUtcOffset,
	            format: '%H:%M %p',
	        });
	    });
	}
}

export default myClass;