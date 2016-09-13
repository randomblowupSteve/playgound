var $ = require('jquery');

module.exports = function(name = 'Steve'){

	$("#p1").html(`Hello! My Name is ${name}`);
}