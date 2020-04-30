const landing_page = document.getElementById("landing-page");
const landing_page_bg = document.getElementById("landing-page-bg");
const header_title = document.querySelector(".header-title");
const transition_div = document.querySelector(".transition-div");
const second_page = document.querySelector(".second-page");
const about_text_container = document.querySelector(".about-text-container")
const about_text = document.querySelector(".about-text");

second_page.style.display = "none";

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

enter();



const button = document.querySelector(".button");
const sidebar = document.querySelector(".sidebar");
const sidebar_items = document.querySelectorAll(".sidebar-item");
console.log(sidebar_items);


button.addEventListener("click", function() {
	button.classList.toggle("active");
	sidebar.classList.toggle("move-to-left");
	sidebar_items.forEach(function(node) {
		console.log(node);
		
		node.classList.toggle("active");
	});
})


const email = document.querySelector(".email");
const email_show = document.querySelector(".email-show");

email.addEventListener("click", function() {
	email_show.classList.toggle("hide-email");
})

// const canvas = document.getElementById("about-canvas");
// const ctx = canvas.getContext("2d");

// canvas_text = canvas.innerHTML;
// canvas_width = about_text_container.offsetWidth;

// const x = canvas_width / 20;
// const y = canvas_width / 20;

// ctx.font = `${y}px mono`;

// let dx = x;
// let dy = y;
// let cnt = 0;
// console.log(canvas_width);
// console.log(dx);


// for (let i = 0; i < canvas_text.length; i++) {
// 	if (cnt > canvas_width / 23) {
// 		cnt = 0;
// 		dx = x;
// 		dy += y;
// 	} 
// 	ctx.fillText(canvas_text[i], cnt * dx, dy, dx);
// 	cnt++;
// }



// const circle = {
// 	x: 20,
// 	y: 20,
// 	size: 5,
// 	dx: 4,
// 	dy: 4
// }

// function drawCircle() {
// 	ctx.beginPath();
// 	ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
// 	ctx.fillStyle = 'purple';
// 	ctx.fill();
// }

// function update() {
// 	ctx.clearRect(0,0, canvas.width, canvas.height)

// 	drawCircle();

// 	circle.x += circle.dx;
// 	circle.y += circle.dy;

// 	if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
// 		circle.dx *= -1; 
// 	}

// 	if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
// 		circle.dy *= -1; 
// 	}

// 	requestAnimationFrame(update);
	
// }

// update();