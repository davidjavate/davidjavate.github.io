var expect = require('chai').expect;
var Car = require('src/car.js').CarOwner;

describe('Car', function() {
		describe('initialization', function() {
			it('has an owner', function() {
				var bob = new CarOwner('Bob Loblaw',100);
				var car = new Car(bob);
				expect(car.owner).to.equal(bob);
				
			})
		})
})