const itBtn = document.querySelector(".it-btn");
const eleBtn = document.querySelector(".ele-btn");
const autoBtn = document.querySelector(".auto-btn");

const itDiv = document.querySelector(".it-div");
const eleDiv = document.querySelector(".ele-div");
const autoDiv = document.querySelector(".auto-div");

itBtn.addEventListener("click", () => {
	itDiv.style.display = "block";
	eleDiv.style.display = "none";
	autoDiv.style.display = "none";
});

eleBtn.addEventListener("click", () => {
	itDiv.style.display = "none";
	eleDiv.style.display = "block";
	autoDiv.style.display = "none";
});

autoBtn.addEventListener("click", () => {
	itDiv.style.display = "none";
	eleDiv.style.display = "none";
	autoDiv.style.display = "block";
});
