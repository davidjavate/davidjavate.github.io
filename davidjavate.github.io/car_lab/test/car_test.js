// test/main_test.js
var Car = require("../src/car.js"),
  expect = require("chai").expect;

describe("Car", function(){

  var davesCar;
  beforeEach(function(){
    // create a new john object each time
    davesCar = new Car("VW","Rabbit", "2009", "Black");
  });

  describe("#color", function(){
    it("should be black", function(){
      expect(davesCar.color).to.equal("Black");
    });
  });

  describe("#model", function(){
    it("should be a rabbit", function(){
      expect(davesCar.model).to.equal("Rabbit");
    });
  });
});