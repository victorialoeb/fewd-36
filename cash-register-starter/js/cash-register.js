// Structure
// ------------------------------------------------
var form    = document.querySelector("form");
var input   = document.querySelector("input");
var entries = document.querySelector(".entries");
var total   = document.querySelector(".total");


// Setup
// ------------------------------------------------
var totalValue = 0;

var receipt = {
	"items": []
}

// Events
// ------------------------------------------------
form.addEventListener("submit", enter);


function enter(event) {
	event.preventDefault();
	// add parseFloat as high as possible 
	var inputValue = parseFloat(input.value);
	// tell newEntry LI to add texContent 
	//which equals input value
	//use parsefloat b/c decimal to
	// separate string from #
	receipt.items.push(inputValue);

	localStorage.setItem("receipt",JSON.stringify(receipt));
}

function createItem(item) {
	//Step 1 create new element 
	var newEntry = document.createElement("li");
	//Step 2 decorate
	newEntry.textContent = item;
	// Step 3 append child
	entries.appendChild(li);
	li.textContent = formatCurrency(item)
	// create new value using old value + new stuff
	//totalValue is a counter 
	totalValue = totalValue + item;

	total.textContent = formatCurrency(totalValue);
	form.reset();

	//clean up! 
	input.value = "";


}

function pageLoad(event) {
	//Get theme object out of local storage 
	if (localStorage.getItem('receipt')== null) {
	   createItem(theme);
    } else {
    	theme = JSON.parse(localStorage.getItem('receipt'))
		createItem(theme);
}
    }




