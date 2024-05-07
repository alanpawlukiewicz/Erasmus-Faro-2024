//Carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("carousel-img");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

setInterval(() => {
	plusSlides(1);
}, 5000);

//Scroll Animations for index.html
function scrollTrigger(selector, options = {}) {
	let els = document.querySelectorAll(selector);
	els = Array.from(els);
	els.forEach((el) => {
		addObserver(el, options);
	});
}
function addObserver(el, options) {
	let observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("slide-in");
				entry.target.classList.remove("hide");
				observer.unobserve(entry.target);
			}
		});
	}, options);
	observer.observe(el);
}
scrollTrigger(".desc-div", {
	rootMargin: "-200px",
});
