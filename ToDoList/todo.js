var item = document.getElementById("item"),
	listItems = document.getElementById("list_items"),
	toDoForm = document.getElementById("todo_form"),
	todoList = document.getElementById("todo_list"),
	action	 = document.getElementsByTagName("button");
// var newButton = function() {
// 	
	
// }

toDoForm.onsubmit = function (event){
	event.preventDefault();

	var newButton = document.createElement('button'),
		newListItem = document.createElement('li'),
		newItemText = document.createTextNode(item.value);

	todoList.appendChild(newListItem)+ " " + todoList.appendChild(newItemText)+ " "
+ todoList.appendChild(newButton);

		newButton.innerHTML ="X";
		item.value ="";

		function hide(e){
  // Unless list items are separated by a margin, e.target should be different than e.currentTarget
  e.target.style.visibility = 'hidden';
}

		todoList.addEventListener('click', hide, false);
	
// 		// action.onclick = function(){
// 		// this.newListItem.removeChild();
// }
}





//reference button I just created...
