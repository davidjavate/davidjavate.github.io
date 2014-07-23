var property = require("./property");

function TownHouse(address){
  // only has one unit per address
  this.address = address;
  this.units = [undefined];
};

TownHouse.prototype.available = function(){
  // a tenant it should not be available
};

TownHouse.prototype = new Property();
TownHouse.prototype.constructor = TownHouse;

module.exports = TownHouse;
