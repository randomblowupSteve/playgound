import jQuery from 'jQuery';
import mixitup from 'mixitup';

class Test{

	constructor(name){
		this.name = name;
		
	}

	getmyName(){
		jQuery("#p1").html(`Hello! My Name is ${this.name}`);
	}

	shuffle(){
		$('#Container').mixItUp();
	}
}

export default Test;