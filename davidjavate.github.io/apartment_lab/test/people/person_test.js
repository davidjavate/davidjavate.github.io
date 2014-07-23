var expect = require("chai").expect,
  Person = require("../../src/people/person.js");
  Manager = require("../../src/people/manager.js");

describe("Person", function(){
	var david = new Person('David','305-4021');
	var sal = new Manager('Salvatore', '555-1234');

	describe('addProperty',function() {
		it('Should add property to properties array', function () {
			
			sal.addProperty('Your house');

		expect(sal.properties).to.equal.(['Your house']);
	
  
	});
	});