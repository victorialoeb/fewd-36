// Structure
// -------------------------------------

var list = document.querySelector("ul");

// Events
// ------------------------------------

// ...to do in next class!

list.addEventListener("click", changeColor);
// Event handler functions
// -------------------------------------
function changeColor(event) {
	console.log("changeColor");
	console.log(event.target.tagName);

	if(event.target.tagName === "UL") {
		return;
	}

	var swatch = event.target;
	var color = swatch.className;
	var color = swatch.getAttribute("class");

	var body = document.querySelector("body");
	body.setAttribute("class", color);

	var name = document.querySelector("span");
	name.textContent = color;
}

var theme = {
	color:"thistle"
}

localStorage.setItem("theme", JSON.stringify(theme));

var theme = JSON.parse(localStorage.getItem("theme"));

