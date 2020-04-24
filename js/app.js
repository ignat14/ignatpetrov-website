const landing_page = document.getElementById("landing-page");
const landing_page_bg = document.getElementById("landing-page-bg");
const header_title = document.querySelector(".header-title");
const transition_div = document.querySelector(".transition-div");

// header_title.style.display = "none";

const enter = function() {
	// landing_page_bg.classList.add("open-site");
	transition_div.classList.add("transition-div-active");
	setTimeout(() => {
		transition_div.classList.add("transition-div-active2");
	}, 300);
	setTimeout(function() {
		landing_page_bg.style.display = "none";
		// header_title.style.display = "block";
		header_title.classList.add("header-title-visible");
	}, 1000);
}