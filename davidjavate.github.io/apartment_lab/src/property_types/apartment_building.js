var property = require("./property.js");

function ApartmentBuilding(name, address) {
  // A building can have many many units
  this.name = name;
  this.address = address;
}

ApartmentBuilding.prototype = new Property();
ApartmentBuilding.prototype.constructor = ApartmentBuilding;

module.exports = ApartmentBuilding;