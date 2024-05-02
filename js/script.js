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
