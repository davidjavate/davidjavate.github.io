var expect = require("chai").expect,
  Property = require("../../src/property_types/property.js"),
	Person = require("../../src/people/person.js"),
	Manager = require("../../src/people/manager.js")
	Tenant = require("../../src/people/tenant.js")

describe("Property", function(){
var park_station = new Property('1488_el_camino')
var david = new Person('David','305-4021');
var sal = new Manager('Salvatore', '555-1234');
var jack = new Tenant('Jack', '123-4567');
// var avalon = new Duplex('555_market');
// var coding_house = new TownHouse('456 Fourth st')
// var archstone = new ApartmentBuilding('Archstone','123 First st');



	describe('setManager', function() {
    it('sets person as manager', function() {
      // var person = 'joe';

      park_station.setManager('joe');
      
      expect(park_station.manager).to.eql('joe');
      });
    });
  
	describe('getManager', function() {
    it('returns the manager', function() {
      // person = 'joe';
      
      expect(park_station.manager).to.eql('joe');
    });
    });

	describe('addTenant', function() {
    it('adds Tenant ', function() {
      person = 'joe';
      park_station.manager = 'joe'
      Tenant.references =[1,2];
      park_station.addTenant('unit1','miles')
      
      expect(park_station.units).to.eql('unit1');
      });
    });
});