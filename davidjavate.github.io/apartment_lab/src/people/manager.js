Person = require("./person.js");
inherits = require("../.inherits.js");

function Manager(name, contact) {
  // set name and contact
  Person.call(this, name, contact);
  this.properties = [];
}

Manager.prototype.addProperty = function(property) {
  // add property from properties
  this.properties.push(property);
};

Manager.prototype.removeProperty = function(property) {
  // remove properties
  //remove property from properties array.
  for(var i=0; i<this.properties.length; i++){
  		if(this.properties[i]=== property){
  				this.properties[i]=undefined;
  				return "Property removed!"
  		}
  }
  
};

inherits(Manager,Person);
// Manager.prototype = new Person();
// Manager.prototype.constructor = Manager;

module.exports = Manager;