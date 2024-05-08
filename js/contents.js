const contentsBtn = document.querySelector(".contents-btn");
const contents = document.querySelector(".contents");
contentsBtn.addEventListener("click", () => {
	if (contentsBtn.innerHTML == "❮") {
		contents.style.transform = `translateX(-100%) translateX(${
			contentsBtn.offsetWidth - 3
		}px)`;
		contentsBtn.innerHTML = "❯";
	} else {
		contents.style.transform = "translateX(0)";
		contentsBtn.innerHTML = "❮";
	}
});
