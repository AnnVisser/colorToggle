const hide = document.querySelector("#menuOptions");
const toggle = document.querySelector("#menuBtn");
const home = document.querySelector("#r-home");
const red = document.querySelector("#r-red");
const orange = document.querySelector("#r-orange");
const yellow = document.querySelector("#r-yellow");
const green = document.querySelector("#r-green");
const blue = document.querySelector("#r-blue");
const purple = document.querySelector("#r-purple");
const allWeb = document.getElementById("allWeb");

// Visibility of the menu

const showMenu = function () {
	hide.classList.remove("hidden");
};
const hideMenu = function () {
	hide.classList.add("hidden");
};

toggle.addEventListener("mouseover", showMenu);
toggle.addEventListener("mouseout", hideMenu);
home.addEventListener("change", hideMenu);
red.addEventListener("change", hideMenu);
orange.addEventListener("change", hideMenu);
yellow.addEventListener("change", hideMenu);
green.addEventListener("change", hideMenu);
blue.addEventListener("change", hideMenu);
purple.addEventListener("change", hideMenu);

//  Changing the background of the website

const changeColor = function (e) {
	allWeb.removeAttribute("class");
	allWeb.classList.add(e.target.id);
	document.getElementById("title").innerHTML = e.target.parentElement.id;
};

home.addEventListener("change", changeColor);
red.addEventListener("change", changeColor);
orange.addEventListener("change", changeColor);
yellow.addEventListener("change", changeColor);
green.addEventListener("change", changeColor);
blue.addEventListener("change", changeColor);
purple.addEventListener("change", changeColor);

//Functions and events to allow keyboard control

const keyboard = function (value) {
	if (value.code === "Digit1") {
		allWeb.removeAttribute("class");
		allWeb.classList.add("r-home");
		document.getElementById("title").innerHTML = "white";
	} else if (value.code === "Digit2") {
		allWeb.removeAttribute("class");
		allWeb.classList.add("r-red");
		document.getElementById("title").innerHTML = "red";
	} else if (value.code === "Digit3") {
		allWeb.removeAttribute("class");
		allWeb.classList.add("r-orange");
		document.getElementById("title").innerHTML = "orange";
	} else if (value.code === "Digit4") {
		allWeb.removeAttribute("class");
		allWeb.classList.add("r-yellow");
		document.getElementById("title").innerHTML = "yellow";
	} else if (value.code === "Digit5") {
		allWeb.removeAttribute("class");
		allWeb.classList.add("r-green");
		document.getElementById("title").innerHTML = "green";
	} else if (value.code === "Digit6") {
		allWeb.removeAttribute("class");
		allWeb.classList.add("r-blue");
		document.getElementById("title").innerHTML = "blue";
	} else if (value.code === "Digit7") {
		allWeb.removeAttribute("class");
		allWeb.classList.add("r-purple");
		document.getElementById("title").innerHTML = "purple";
	}
};

window.addEventListener("keypress", keyboard);
