//Menu button
const menuBtn = document.querySelector(".menu-navicon");
const menuCheckbox = document.querySelector("#menu-checkbox");
const navbar = document.querySelector(".nav-bar");

menuBtn.addEventListener("click", () => {
	if (menuCheckbox.checked) {
		menuCheckbox.checked = false;
		navbar.style.left = "-950px";
	} else {
		menuCheckbox.checked = true;
		navbar.style.left = "0";
	}
});

const header = document.querySelector(".bigger");
const navBtns = document.querySelectorAll(".nav-btn");
if (header != null) {
	switch (header.innerHTML) {
		case "Uczestnicy projektu Erasmus+":
			navBtns[1].style.background = "#e7e7e7";
			break;
		case "Organizatorzy":
			navBtns[2].style.background = "#e7e7e7";
			break;
		case "Praktyki":
			navBtns[3].style.background = "#e7e7e7";
			break;
		case "Galeria":
			navBtns[4].style.background = "#e7e7e7";
			break;
		default:
			console.log("err");
	}
} else {
	navBtns[0].style.background = "#e7e7e7";
}
