const text = document.querySelector(".main-title p");
let innerText = text.innerHTML;

const charSet = "10/{};&$%";
let dynamicText = innerText;



let cnt = 22
const letterChangeInterval = setInterval(function() {
	let newString = ""
	for (let i = 0; i < innerText.length; i++) {
		let charIdx = Math.floor(Math.random() * charSet.length)
		let randomChar = charSet[charIdx];
		let chance = Math.random() * innerText.length;
		if (" .,".includes(innerText[i]) || chance < i) {
			newString += innerText[i];
		} else {
			newString += randomChar;
		}
	}
	
	console.log(newString);
	text.innerHTML = newString;
	
	if (cnt <= 1) {
		clearInterval(letterChangeInterval);
		text.innerHTML = innerText;
	}
	cnt--;
}, 150);



