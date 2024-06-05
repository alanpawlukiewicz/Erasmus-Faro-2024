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
		case "Uczestnicy Projektu":
			navBtns[1].style.fontWeight = "800";
			break;
		case "Organizatorzy":
			navBtns[2].style.fontWeight = "800";
			break;
		case "Galeria":
			navBtns[4].style.fontWeight = "800";
			navBtns[6].style.fontWeight = "800";
			break;
		case "Praktyki":
			navBtns[3].style.fontWeight = "800";
			break;
		case "Przygotowania":
			navBtns[4].style.fontWeight = "800";
			navBtns[5].style.fontWeight = "800";
			break;
		default:
			console.log("err");
	}
} else {
	navBtns[0].style.fontWeight = "800";
}

//Inne
const otherBtn = document.querySelector(".other-btn");
const other = document.querySelector(".other-dropdown");
otherBtn.addEventListener("click", () => {
	if (other.style.maxHeight == "" || other.style.maxHeight == "0px") {
		otherBtn.innerHTML = "Inne <img src='images/icons/arrow_up.svg' alt='v'>";
		other.style.maxHeight = "120px";
		other.style.padding = "5px";
	} else {
		otherBtn.innerHTML = "Inne <img src='images/icons/arrow_down.svg' alt='v'>";
		other.style.maxHeight = "0";
		other.style.padding = "0 5px";
	}
});
