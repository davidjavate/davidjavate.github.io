window.onload = function() {
//Cell assignments

var cOne = document.getElementById("cell1"),
	cTwo = document.getElementById("cell2"),
	cThree = document.getElementById("cell3"),
	cFour = document.getElementById("cell4"),
	cFive = document.getElementById("cell5"),
	cSix = document.getElementById("cell6"),
	cSeven = document.getElementById("cell7"),
	cEight = document.getElementById("cell8"),
	cNine = document.getElementById("cell9"),
	reset = document.getElementById("button");

//Adding X's & O's
var count = 1

//if box is empty, then do inner HTML & count, else alert

cOne.onclick = function() {
	if((cOne.innerHTML ==="X")|| (cOne.innerHTML ==="O")){
		alert("This square has already been played!");
		count--;
	}
	else if ((count%2 !==0)) {
		cOne.innerHTML="X";
		cOne.style.color = "black";
		count++;
	}
	else {
		cOne.innerHTML="O";
		cOne.style.color = "white";
		count++;
	};
	
}

cTwo.onclick = function() {
		if ((cTwo.innerHTML ==="X") || (cTwo.innerHTML === "O")){
		alert("This square has already been played!");
 		count--;
}
		else if  ((count%2 !== 0))  {
		
			cTwo.innerHTML="X";
			cTwo.style.color = "black";
			count++;
			}
			else {
			cTwo.innerHTML="O";
			cTwo.style.color = "white";
			count++;
			}
}
	
cThree.onclick = function() {
	if((cThree.innerHTML ==="X") ||(cThree.innerHTML ==="O")) {
		alert("This square has already been played!");
		count--;
	}
	else if ((count%2 !==0)) {
		cThree.innerHTML="X";
		cThree.style.color = "black";
		count++;
	}
	else {
		cThree.innerHTML="O";
		cThree.style.color = "white";
		count++;
	};
}

cFour.onclick = function() {
	if((cFour.innerHTML ==="X")|| (cFour.innerHTML ==="O")){
		alert("This square has already been played!");
		count--;
	}
	else if ((count%2 !==0)) {
		cFour.innerHTML="X";
		cFour.style.color = "black";
		count++;
	}
	else {
		cFour.innerHTML="O";
		cFour.style.color = "white";
		count++;
	};
	
}

cFive.onclick = function() {
	if((cFive.innerHTML ==="X")|| (cFive.innerHTML ==="O")){
		alert("This square has already been played!");
		count--;
	}
	else if ((count%2 !==0)) {
		cFive.innerHTML="X";
		cFive.style.color = "black";
		count++;
	}
	else {
		cFive.innerHTML="O";
		cFive.style.color = "white";
		count++;
	};
	
}
cSix.onclick = function() {
	if((cSix.innerHTML ==="X")|| (cSix.innerHTML ==="O")){
		alert("This square has already been played!");
		count--;
	}
	else if ((count%2 !==0)) {
		cSix.innerHTML="X";
		cSix.style.color = "black";
		count++;
	}
	else {
		cSix.innerHTML="O";
		cSix.style.color = "white";
		count++;
	};
	
}

cSeven.onclick = function() {
	if((cSeven.innerHTML ==="X")|| (cSeven.innerHTML ==="O")){
		alert("This square has already been played!");
		count--;
	}
	else if ((count%2 !==0)) {
		cSeven.innerHTML="X";
		cSeven.style.color = "black";
		count++;
	}
	else {
		cSeven.innerHTML="O";
		cSeven.style.color = "white";
		count++;
	};
	
}

cEight.onclick = function() {
	if((cEight.innerHTML ==="X")|| (cEight.innerHTML ==="O")){
		alert("This square has already been played!");
		count--;
	}
	else if ((count%2 !==0)) {
		cEight.innerHTML="X";
		cEight.style.color = "black";
		count++;
	}
	else {
		cEight.innerHTML="O";
		cEight.style.color = "white";
		count++;
	};

}

cNine.onclick = function() {
	if((cNine.innerHTML ==="X")|| (cNine.innerHTML ==="O")){
		alert("This square has already been played!");
		count--;
	}
	else if ((count%2 !==0)) {
		cNine.innerHTML="X";
		cNine.style.color = "black";
		count++;
	}
	else {
		cNine.innerHTML="O";
		cNine.style.color = "white";
		count++;
	};
	
}

//Reset button

reset.onclick = function() {
	cOne.innerHTML="";
	cTwo.innerHTML="";
	cThree.innerHTML="";
	cFour.innerHTML="";
	cFive.innerHTML="";
	cSix.innerHTML="";
	cSeven.innerHTML="";
	cEight.innerHTML="";
	cNine.innerHTML="";
	onOff= true;
	count = 1;
}

}
















	
