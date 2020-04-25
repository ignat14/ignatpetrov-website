const landing_page = document.getElementById("landing-page");
const landing_page_bg = document.getElementById("landing-page-bg");
const header_title = document.querySelector(".header-title");
const transition_div = document.querySelector(".transition-div");
const second_page = document.querySelector(".second-page");
const about_text = document.querySelector(".about-text");

second_page.style.display = "none";
// landing_page.style.display = "none";
// landing_page_bg.style.display = "none";

const enter = function() {
	// landing_page_bg.classList.add("open-site");
	transition_div.classList.add("transition-div-active");
	setTimeout(() => {
		transition_div.classList.add("transition-div-active2");
	}, 300);
	setTimeout(function() {
		landing_page_bg.style.display = "none";
		second_page.style.display = "block";
		header_title.classList.add("header-title-visible");
		about_text.classList.add("about-text-visible");
	}, 500);

	transformText(about_text, about_text.innerHTML, 18);

}