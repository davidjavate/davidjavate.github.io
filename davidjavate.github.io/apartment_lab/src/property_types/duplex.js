var property = require("./property.js");

function Duplex(address) {
  // A duplex only has 2 units;
  this.address= address;
  this.units= [undefined, undefined];

}

Duplex.prototype.units = function(unit) {
	this.unit = unit
	var availableUnits 
	if(availableUnits[i]<=1){
		Duplex.availableUnits.push(unit);
	}else{
		return "Duplex is full!"
	}
}

Duplex.prototype = new Property();
Duplex.prototype.constructor = Duplex;

module.exports = Duplex;