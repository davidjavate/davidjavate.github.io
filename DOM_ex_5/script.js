

 window.onload =  function(event){
  var lastClicked = document.getElementById("last_clicked");
  var previousClicked = document.getElementById("previously_clicked");
  var currentClickOne = document.getElementById("div_1");
  var currentClickTwo = document.getElementById("div_2");
  var currentClickThree = document.getElementById("div_3");


// var setClickOnDiv = function(id, someFunction) {
// 	var element = document.getElementById(id);
// 	element.onclick = function() {
// 		lastClicked.innerHTML = element.innerHTML;
// 	}
// }

// setClickOnDiv("div_1");
// setClickOnDiv("div_2");


  var divOne = document.getElementById("div_1");
  divOne.onclick = function(event){
  	previousClicked.innerHTML = lastClicked.innerHTML;
    lastClicked.innerHTML = divOne.innerHTML;
    currentClickOne.style.color = "blue";
    currentClickOne.style.backgroundcolor = "white";
    divTwo.style.color = "black";
    divThree.style.color ="black";

  }
  
   var divTwo = document.getElementById("div_2");
  divTwo.onclick = function(event){
  	previousClicked.innerHTML = lastClicked.innerHTML;
   lastClicked.innerHTML = divTwo.innerHTML;
   currentClickTwo.style.color = "blue";
   divOne.style.color = "black";
    divThree.style.color ="black";
  }
  
   var divThree = document.getElementById("div_3");
  divThree.onclick = function(event){
  	previousClicked.innerHTML = lastClicked.innerHTML;
    lastClicked.innerHTML = divThree.innerHTML;
    currentClickThree.style.color = "blue";
    divOne.style.color = "black";
    divTwo.style.color ="black";
  };


};