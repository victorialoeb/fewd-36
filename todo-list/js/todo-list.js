//Structure
var task   = document.querySelector(".task");
var date   = document.querySelector(".date");
var button = document.querySelector("button");
var list   = document.querySelector(".list");

// Local storage 
// ---------------------------
	var totalValue = 0;
	var toDo = {
		"items":[]
	};



//Events
//--------------------
window.addEventListener("load", setPageState);
button.addEventListener("click", createTask);


//Event Handlers
//-----------------------------

function setPageState(event) {

	// error checking. return early if nothing saved yet
	if (localStorage.getItem("toDo") == null) {
		return;
	}
	// Repopulate the list
	toDo = JSON.parse(localStorage.getItem("toDo"));

	toDo.items.forEach(createTask);

}

function storage(event) {

	event.preventDefault();	
	//create task object
	var task = {
		"name": task.value,
		"date":date.value,
		"done": false
	}
	//add item to list 								// prevents default form behaviours
	toDo.items.push(task);

	//update page 
	createTask(task);

	//reset form
	input.value="";

	// save to local storage
	localStorage.setItem("toDo", JSON.stringify(toDo));
}
	

function createTask(a) {

	// Create Elements

	var checkbox = document.createElement("input");			// checkbox
	var newTask = document.createElement("li");				// new task with checkbox
	var textArea = document.createElement("span");
	var labelTask = document.createElement("label");			// span for the task and date



	// Decorate Elements
	checkbox.setAttribute("type", "checkbox");	
		if (task.done) {
			checkbox.setAttribute("checked", true);
		}											// define the type of box
	textArea.textContent = task.value + " " + date.value;		// defines the text in the new element
	labelTask.textcontent = task.name;

	checkbox.addEventListener("click", taskClicked);	

	// Append Elements
	list.appendChild(newTask);								// adds newTask to the ul
	newTask.appendChild(checkbox);							// adds the checkbox to newTask
	newTask.appendChild(textArea);							// adds all text to newTask

}

function taskClicked(e) {
	var checkbox = e.target;
	var text = checkbox.nextSibling,textContent;

	toDo.items.forEach()
	function updateCheckedState(task) {
	if (task.name == text) {
		task.done = checkbox.checked;

		localStorage.setItem("toDo", JSON.stringify(toDo));
	}
}
}



/*function enter(event) {
	event.preventDefault();

	// get the current entry value from form, convert to number with parseFloat
	var date = parseFloat(date.value);
	var task = parseFloat(task.value);

	textArea.textContent = date + " " + task;
	var newLine = textArea.textContent

	list.appendChild(newTask);								// adds newTask to the ul
	newTask.appendChild(checkbox);							// adds the checkbox to newTask
	newTask.appendChild(textArea);

	
}
*/

