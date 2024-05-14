const images = document.querySelectorAll(".gallery img");
const imageHover = document.querySelector(".image-hover");
const imageShown = document.querySelector(".image-shown");

const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const counter = document.querySelector(".counter");
let count = 1;

function delay(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

const imagesArr = Array.prototype.slice.call(images);
function displayImage(img) {
	let imgClone = images[imagesArr.indexOf(img)].cloneNode(true);
	imgClone.style.maxWidth = "90%";
	imgClone.style.maxHeight = "600px";
	imgClone.style.position = "absolute";
	imgClone.style.left = "50%";
	imgClone.style.top = "50%";
	imgClone.style.transform = "translate(-50%, -50%)";
	imageHover.style.display = "block";
	imageShown.textContent = "";
	imageShown.appendChild(imgClone);
	count = imagesArr.indexOf(img);
	counter.textContent = `${count + 1}/${imagesArr.length}`;
}

async function displayImage2(isLeft) {
	let imgClone = images[count].cloneNode(true);
	imgClone.style.maxWidth = "90%";
	imgClone.style.maxHeight = "600px";
	imgClone.style.position = "absolute";
	imgClone.style.left = "50%";
	imgClone.style.top = "50%";
	imgClone.style.transform = "translate(-50%, -50%)";

	imageHover.style.display = "block";
	if (isLeft) {
		imageShown.firstChild.classList.add("slide-out-left");
		imgClone.classList.add("slide-in-left");
	} else {
		imageShown.firstChild.classList.add("slide-out-right");
		imgClone.classList.add("slide-in-right");
	}
	imageShown.appendChild(imgClone);
	await delay(100).then(() => imageShown.removeChild(imageShown.firstChild));
	counter.textContent = `${count + 1}/${imagesArr.length}`;
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
		displayImage2(true);
	}
});

plusBtn.addEventListener("click", () => {
	//Liczba obrazkow -1
	if (count < imagesArr.length - 1) {
		count++;
		displayImage2(false);
	}
});
//Contents
const pracBtn = document.querySelector(".prac-btn");
const tripBtn = document.querySelector(".trips-btn");
const pracList = document.querySelector(".prac-list");
const tripList = document.querySelector(".trips-list");
const pracListHeight = pracList.offsetHeight;
const tripListHeight = tripList.offsetHeight;
pracList.style.maxHeight = "0";
tripList.style.maxHeight = "0";
tripBtn.addEventListener("click", () => {
	if (tripList.style.maxHeight == "0px" || tripList.style.maxHeight == "") {
		tripBtn.innerHTML = "wycieczki v";
		tripBtn.style.background = "#d4293d";
		tripBtn.style.color = "#fff";
		tripList.style.maxHeight = `${tripListHeight}px`;
	} else {
		tripBtn.innerHTML = "wycieczki &#94;";
		tripList.style.maxHeight = "0px";
		tripBtn.style.background = "#F2F2F2";
		tripBtn.style.color = "#a7a7a7";
	}
});
pracBtn.addEventListener("click", () => {
	if (pracList.style.maxHeight == "0px" || pracList.style.maxHeight == "") {
		pracBtn.innerHTML = "praktyki v";
		pracBtn.style.background = "#d4293d";
		pracBtn.style.color = "#fff";
		pracList.style.maxHeight = `${pracListHeight}px`;
	} else {
		pracBtn.innerHTML = "praktyki &#94;";
		pracList.style.maxHeight = "0px";
		pracBtn.style.background = "#F2F2F2";
		pracBtn.style.color = "#a7a7a7";
	}
});

//Keypress action
document.onkeydown = (event) => {
	if (imageHover.style.display == "block") {
		if (event.key == "ArrowRight") {
			if (count < imagesArr.length - 1) {
				count++;
				displayImage2(false);
			}
		} else if (event.key == "ArrowLeft") {
			if (count > 0) {
				count--;
				displayImage2(true);
			}
		}
	}
};

imageHover.addEventListener("click", (e) => {
	if (e.target.tagName == "DIV") {
		imageHover.style.display = "";
	}
});

//Swipe mechanic
imageHover.addEventListener("touchstart", handleTouchStart, false);
imageHover.addEventListener("touchmove", handleTouchMove, false);

let xDown = null;
let yDown = null;

function getTouches(e) {
	return e.touches || e.originalEvent.touches;
}

function handleTouchStart(e) {
	const firstTouch = getTouches(e)[0];
	xDown = firstTouch.clientX;
	yDown = firstTouch.clientY;
}

function handleTouchMove(e) {
	if (!xDown || !yDown) {
		return;
	}

	var xUp = e.touches[0].clientX;
	var yUp = e.touches[0].clientY;

	var xDiff = xDown - xUp;
	var yDiff = yDown - yUp;

	if (Math.abs(xDiff) > Math.abs(yDiff)) {
		if (xDiff > 0) {
			if (count < imagesArr.length - 1) {
				count++;
				displayImage2(false);
			}
		} else {
			if (count > 0) {
				count--;
				displayImage2(true);
			}
		}
	}
	/* reset values */
	xDown = null;
	yDown = null;
}
