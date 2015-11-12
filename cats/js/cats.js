// Structure
// ----------------------------------------------
var pictures = document.querySelector(".pictures");
var names    = document.querySelector(".names");
var feed     = document.querySelector(".feed");

// Events
// ----------------------------------------------


// Setup
// ----------------------------------------------
var cat = {
	picture: "baby.jpg",
	name: "Daisy"
}

// Event handlers
// ----------------------------------------------
window.addEventListener("load", setupPage);

// Update page functions
// ----------------------------------------------
function setupPage() {
	mockPictures.forEach(createPicture);
	mockNames.forEach(createName);
}

//Picture 

function createPicture(item) {

//step 1: create elements
var li =  document.createElement("li");
var img = document.createElement("img");

//step 2: decorate elements
img.setAttribute("src", "images/" + item);


//step 3: insert in dom
li.appendChild(img);
pictures.appendChild(li);
}

//Name

function createName(item) {
//step 1: create elements
var li =  document.createElement("li");

//step 2: decorate elements
li.textContent = item;


//step 3: insert in dom
names.appendChild(li);
}

//Feed

function createPost(item) {

//step 1: create elements
var li  = document.createElement("li");
var img = document.createElement("img");
var p   = document.createElement("p")

//step 2: decorate elements
p.textContent = item.name;
img.setAttribute("src", "images/" + item.picture);

//step 3: insert in dom
li.appendChild(p);
li.appendChild(img);
feed.appendChild(li);
}

