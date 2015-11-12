// Structure
// ------------------------------------------------
var form    = document.querySelector("form");
var input   = document.querySelector("input");
var entries = document.querySelector(".entries");
var total   = document.querySelector(".total");


// Setup
// ------------------------------------------------
var totalValue = 0;

// Events
// ------------------------------------------------
form.addEventListener("submit", enter);


function enter (event) {
	event.preventDefault();
	//Step 1 create new element 
	var newEntry = document.createElement("LI");
	//Step 2 decorate (define)
	// add parseFloat as high as possible 
	var inputValue = parseFloat(input.value);
	// tell newEntry LI to add texContent 
	//which equals input value
	//use parsefloat b/c decimal to
	// separate string from #
	newEntry.textContent = inputValue;
	// Step 3 append child
	entries.appendChild(newEntry);
	// create new value using old value + new stuff
	//totalValue is a counter 
	totalValue = totalValue + inputValue;
	total.textContent = "$" + totalValue;
	form.reset();
}



