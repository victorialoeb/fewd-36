
//Structure
//------------------------
var form  = document.querySelector("form");
var input = document.querySelector(".query");
var ul    = document.querySelector(".results");


//Setup 
//------------------
var results 

//Events
//---------------------
form.addEventListener("submit", getMovies);

//Event Handlers
//--------------------------
function getMovies(e) {
	e.preventDefault();
	console.log("getMovies");

	//create url for api request 
	var search = input.value;
	var url = "http://www.omdbapi.com/?s=" + search;  

	//makes AJAX request 
	jQuery.getJSON(url, updateMovies);				//jQuery is an object 
}


function updateMovies(json) {
	// reset/clear the page 
	ul.innerHTML = "";
	
	var movies = json["Search"];

	movies.forEach(createMovieItem);
}

//Update page 
//----------------------
function createMovieItem(movie) {
	//Step 1 - create:
	var li = document.createElement("li"); //create li for search item 

	//Step 2 - attributes:
	li.textContent = movie["Title"];  //use their object notation and add title to li

	//Step 3 - append:
	ul.appendChild(li);  //append li to ul
}
function getPoster(e) {
	// TODO for HW: build this function! 
}