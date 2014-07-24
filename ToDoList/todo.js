var item = document.getElementById("item"),
	listItems = document.getElementById("list_items"),
	toDoForm = document.getElementById("todo_form"),
	todoList = document.getElementById("todo_list"),
	action	 = document.getElementsByTagName("button");



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

  e.target.style.visibility = 'hidden';
}

		todoList.addEventListener('click', hide, false);
	

}



