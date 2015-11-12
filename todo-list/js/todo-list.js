//Structure
var form = document.querySelector("form");
var button = document.querySelector("button");
var list = document.querySelector(".list");
var task = document.querySelector(".task");
var date = document.querySelector(".date");

//Events
form.addEventListener("submit", todo);
//button.addEventListener("click", testIt);


//Event Handlers
function todo(e) {
	e.preventDefault();

//define values of task and date inputs	
var taskValue=task.value;
var dateValue=date.value;

var newTask = document.createElement("li");
var	checkbox = document.createElement("input");
var	span = document.createElement("span");

// specify checkbox before text	
checkbox.setAttribute("type", "checkbox");	
span.textContent = taskValue + " " + dateValue;

list.appendChild(newTask);
newTask.appendChild(checkbox);
newTask.appendChild(span);

}

function checked(event) {

	//1: Create new html

	//2: decorate 
	span.textContent=task.name;
	

	//make clickable
	checkbox.addEventListener ("click", "checked");
	
	

	
	
};

function testIt (event) {
	console.log('testIt');
	console.log(event.target);
	event.target.className = "checked";
}


var taskz = [];

var task1 = {
	name:"exercise",
	date:undefined,
	completed:false
}

var task3 = {
	name:"eat junk food",
	date:"2015-11-11",
	completed:false
}