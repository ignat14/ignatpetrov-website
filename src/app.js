import { transformText } from "./title_anim.js";

import mainStyle from "../css/main.css";
import sidebarStyle from "../css/sidebar.css";
import timelineStyle from "../css/timeline.css";
import educationStyle from "../css/education.css";
import skillsStyle from "../css/skills.css";
import landingPageStyle from "../css/landing_page.css";

const loading_page_title = document.querySelector("#landing-page p");
let loading_page_title_text = loading_page_title.innerHTML;

transformText(loading_page_title, loading_page_title_text, 20);

const second_page = document.querySelector(".second-page");
second_page.style.display = "none";

function enter() {
  const landing_page_bg = document.getElementById("landing-page-bg"),
    header_title = document.querySelector(".header-title"),
    about_text = document.querySelector(".about-text"),
    transition_div = document.querySelector(".transition-div");

  transition_div.classList.add("transition-div-active");
  setTimeout(() => {
    transition_div.classList.add("transition-div-active2");
  }, 300);
  setTimeout(() => {
    landing_page_bg.style.display = "none";
    second_page.style.display = "block";
    header_title.classList.add("header-title-visible");
    about_text.classList.add("about-text-visible");
  }, 500);

  transformText(about_text, about_text.innerHTML, 18);
}

const chavron = document.querySelector(".chavron");
chavron.addEventListener("click", function () {
  enter();
});

// enter();

const button = document.querySelector(".button"),
  sidebar = document.querySelector(".sidebar"),
  sidebar_items = document.querySelectorAll(".sidebar-item");

button.addEventListener("click", function () {
  button.classList.toggle("active");
  sidebar.classList.toggle("move-to-left");
  sidebar_items.forEach(function (node) {
    node.classList.toggle("active");
  });
});

const email = document.querySelector(".email");
const email_show = document.querySelector(".email-show");

email.addEventListener("click", function () {
  email_show.classList.toggle("hide-email");
});

const work_experience = require("./work_experience.json");
let timelineElements = "";

import "../images/eyetea.png";
import "../images/semos.jpg";
import "../images/nebiz.jpg";
import "../images/vertigo.png";
import "../images/fx3x.jpg";

work_experience.forEach((we) => {
  timelineElements += `
		<div class="timeline-item">
			<h3 class="year">${we.time}</h3>
			<div class="front-card">
				<img src="${we.companyLogo}" alt="${we.companyName}">
				<div>
					<h2 class="job-title">${we.jobTitle}</h2>
					<h4 class="company-name">${we.companyName}</h4>
				</div>
			</div>
			<div class="back-card">
				<p class="job-description">${we["job-description"]}</p>
			</div>
		</div>
		`;
});
const timeline = document.querySelector(".timeline");
timeline.innerHTML = timelineElements;

const front_cards = document.querySelectorAll(".front-card");

front_cards.forEach(function (front_card) {
  const back_card = front_card.parentNode.querySelector(".back-card");

  front_card.addEventListener("click", function () {
    front_card.classList.toggle("sharp-bottom-edges");
    back_card.classList.toggle("job-open");
  });
});
