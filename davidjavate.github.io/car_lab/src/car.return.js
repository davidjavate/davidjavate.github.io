// require('locus');

function Car(make, model, year, color){
  this.make = make;
  this.model = model;
  // do the same for year and color
  this.state = "off"
  this.previousOwners = [];
  this.currentOwner = "manufacturer";
  this.passengers =[];
  this.color = color;
}


//*  `Car#sale`, we should be able to sale a car to someone, which should update the `current_owner` and `previous_owners` array.

Car.prototype.sale = function(newOwner){
	this.previousOwners.push(this.currentOwner);
	this.currentOwner= newOwner;
	return "the new owner is "+ newOwner;
};

//* `Car#paint`, which should take a new color and update the color of the car to be new color.
Car.prototype.paint = function(newColor){
	this.color=newColor;
	return "The new paint color is "+ newColor;
};

// * `Car#start` should change the state of the car to `on`.
// * `Car#off` should change the state to `off`.
// * `Car#driveTo`, it should `console.log` `"driving to <destination>"`, but only if the car `state` is `on`. *Note: this method needs to take a `destination` param.*
// * `Car#park` only if the car is `off` and if it's off console.log `parked!!`.

Car.prototype.start = function(){
	this.state="on";
	return "The Car is now " + this.state;
};

Car.prototype.off = function() {
	this.state="off";
	return "The Car is now " + this.state;
};

Car.prototype.driveTo = function(destination){
	if(this.state === "on"){
		return "driving to "+destination;
	}else{
	return "Car isn't on!";
}
	
}

Car.prototype.park=function() {
	if(this.state === "off"){
		return "The car is now parked!!";
	}
	
}

// ## Phase III 

// Add the following property to the constructor:

// * `passengers`

// it should default to an empty array.

// Implement the following methods:

// // * `Car#pick_up` should take a `name` and `console.log` 
// that you are `"driving to 'pick up <friend>'"`, but only if the `car` is `on`. 
// It should also update the `passangers` array to include the new passanger.
// // * `Car#dropOff` it should take a `name` and remove them from the `passangers`
//  array, but only if they are in the array. It should also only drop them off if the 
//  car is `on`.

Car.prototype.pick_up=function(name) {
	if(this.state === "on"){
	return "driving to pick up"+name;
	this.passengers.push(name);
}	else{
	return "Car isn't on!";
}
return
}

Car.prototype.dropOff= function(name){
	if((this.state ==="on") && (name === this.passengers[0])){
		this.passengers.pop(name);
		return "Dropping off "+ name;
	}else {
		return name+ " isn't here!";
	}

return;
	}

var davesCar = new Car("VW","Rabbit", "2009", "Black");
// davesCar.state
davesCar
davesCar.sale("Your Mom");
davesCar.previousOwners;
davesCar.paint("Red");
console.log(davesCar.start());
console.log(davesCar.off());
console.log(davesCar.start());
console.log(davesCar);
console.log(davesCar.driveTo("Los Angeles"));
// console.log(davesCar);
// console.log(davesCar.start());
// console.log(davesCar.off());
// console.log(davesCar.park());
// console.log(davesCar.start());
// console.log(davesCar.pick_up("Betsy"));
// console.log(davesCar.dropOff("Betsy"));

module.exports=Car;

// eval(locus);