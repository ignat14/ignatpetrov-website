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


const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

// ctx.fillStyle = 'red';
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle = 'blue';
// ctx.fillRect(200, 20, 150, 100);

// ctx.lineWidth = 5;
// ctx.strokeRect(200, 200, 20, 20);

// ctx.clearRect(25, 25, 140, 90);

// ctx.fillText('Ignat Petrov', 400, 50);

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 200);
// ctx.closePath();
// ctx.fillStyle = "orange";
// ctx.fill();

const circle = {
	x: 200,
	y: 200,
	size: 30,
	dx: 5,
	dy: 4
}

function drawCircle() {
	ctx.beginPath();
	ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
	ctx.fillStyle = 'purple';
	ctx.fill();
}

function update() {
	ctx.clearRect(0,0, canvas.width, canvas.height)

	drawCircle();

	circle.x += circle.dx;
	circle.y += circle.dy;

	if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
		circle.dx *= -1; 
	}

	if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
		circle.dy *= -1; 
	}

	requestAnimationFrame(update);
	console.log(123);
	
}

update();