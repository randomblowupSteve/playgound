var $ = require('jquery');

class Test{

	constructor(name){
		this.name = name;
	}

	getmyName(){
		$("#p1").html(`Hello! My Name is ${this.name}`);
	}
}
export default Test;