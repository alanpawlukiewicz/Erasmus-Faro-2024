const images = document.querySelectorAll(".gallery img");
const imageHover = document.querySelector(".image-hover");
const imageShown = document.querySelector(".image-shown");

const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const counter = document.querySelector(".counter");
let count = 1;

const imagesArr = Array.prototype.slice.call(images);
function displayImage(img) {
	let imgClone = images[imagesArr.indexOf(img)].cloneNode(true);
	imgClone.style.maxWidth = "90%";
	imgClone.style.maxHeight = "600px";
	imageHover.style.display = "block";
	imageShown.textContent = "";
	imageShown.appendChild(imgClone);
	count = imagesArr.indexOf(img);
	counter.textContent = `${count + 1}/101`;
}

function displayImage2() {
	let imgClone = images[count].cloneNode(true);
	imgClone.style.maxWidth = "90%";
	imgClone.style.maxHeight = "600px";
	imageHover.style.display = "block";
	imageShown.textContent = "";
	imageShown.appendChild(imgClone);
	counter.textContent = `${count + 1}/101`;
}

images.forEach((img) => {
	img.addEventListener("click", () => {
		displayImage(img);
	});
});

const tbCloceBtn = document.querySelector(".toolbar-close");

tbCloceBtn.addEventListener("click", () => {
	imageHover.style.display = "none";
});

minusBtn.addEventListener("click", () => {
	if (count > 0) {
		count--;
		displayImage2();
	}
});

plusBtn.addEventListener("click", () => {
	//Liczba obrazkow -1
	if (count < 100) {
		count++;
		displayImage2();
	}
});
