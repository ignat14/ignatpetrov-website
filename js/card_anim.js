// const card = document.querySelector(".timeline-container");

// const { x, y, width, height } = card.getBoundingClientRect();
// const cx = x + width / 2;
// const cy = y + height / 2;

// function handleMove(e) {
// 	const { pageX, pageY } = e;

// 	const dx = (cx - pageX) / (width / 2);
// 	const dy = (cy - pageY) / (height / 2);

// 	this.style.transform = `rotateX(${7 * dy * -1}deg) rotateY(${7 * dx}deg)`;
// }

// function handleOut() {
// 	this.style.transform = 'initial';
// }

// card.addEventListener('mouseover', handleMove);
// card.addEventListener("mouseout", handleOut);


const front_cards = document.querySelectorAll(".front-card");
console.log("AAAAAAAAAAAAAAAAAAAAAa");

console.log(front_cards);


front_cards.forEach(function(card) {
	const back_card = card.parentNode.querySelector(".back-card");

	card.addEventListener("click", function() {
		console.log("AAA");
		console.log(back_card);
		
		card.classList.toggle("sharp-bottom-edges");
		back_card.classList.toggle("job-open");
	});
	
});
