function Property(address) {
  this.address = address;
  this.availableUnits = [];
  this.rentedUnits =[];
  this.tenants = [];
  // this.manager = [];
}

Property.prototype.setManager = function(person) {
  // set this.manager to person
  this.manager = person;

};

Property.prototype.getManager = function(){
  // return this.manager 
  return this.manager 
};

Property.prototype.addTenant = function(unit, tenant) {
  // add tenant but check to make sure there
  // is a manager first and a tenant has 2 references
  if (this.manager = person && Tenant.references.length === 2 ){
      Property.tenants.push(tenant);
      Property.rentedUnits.push(unit);
      Property.availableUnits.pop();
      return "Welcome to your new home!";
  }else {
    return "Sorry you don't qualify!";
  }

};

Property.prototype.removeTenant = function(unit, tenant) {
  // remove tenant
  for(var i=0; i<this.tenants.length; i++){
      if(this.tenants[i]=== tenant){
          this.tenants[i]=undefined;
          this.units.pop();
          return "Tenant removed!"
      }else{
        return "Tenant has been evicted!"
      }
};
};

Property.prototype.availableUnits = function(){
  // return num of units available
  return availableUnits;
}

Property.prototype.rentedUnits = function(){
  // return rented units
  return rentedUnits;
}


module.exports = Property;
