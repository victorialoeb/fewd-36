// Structure
// -------------------------------------
var list = document.querySelector("ul");

// Setup
//----------------------------------
var theme = {
	'color':'white'
};

// Events
// -------------------------------------
list.addEventListener("click", handleClick);
window.addEventListener("load", pageLoad);

// Event handler functions
// -------------------------------------
function handleClick(event) {
	// Return early unless the swatch was clicked
	if (event.target.tagName === "UL") {
		return;
	}


	var swatchElement = event.target;
	var swatchColor = swatchElement.getAttribute("class");
	
	
	// 1. Update data model
	theme.color = swatchColor;

	// 2. Call function to update page
	changeColor(theme);


	// 3. Save data model to localStorage 
	localStorage.setItem('theme', JSON.stringify(theme));

}
function pageLoad(event) {
	//Get theme object out of local storage 
	if (localStorage.getItem('theme')== null) {
	   changeColor(theme);
    } else {
    	theme = JSON.parse(localStorage.getItem('theme'))
		changeColor(theme);
}
    }

	
// Update page functions
function changeColor(theme) {
	var body = document.querySelector("body");
	body.className = theme.color;

	var name = document.querySelector("span");
	name.textContent = theme.color;
}
