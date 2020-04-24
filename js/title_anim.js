const text = document.querySelector("#landing-page p");
let innerText = text.innerHTML;

const charSet = "10/{}&$%_#";
let dynamicText = innerText;

let cnt = 20
const letterChangeInterval = setInterval(function() {
	let newString = ""
	for (let i = 0; i < innerText.length; i++) {
		let charIdx = Math.floor(Math.random() * charSet.length)
		let randomChar = charSet[charIdx];
		let chance = Math.random() * innerText.length;
		if (" .,".includes(innerText[i]) || chance > cnt) {
			newString += innerText[i];
		} else {
			newString += randomChar;
		}
	}
	
	text.innerHTML = newString;
	
	if (cnt <= 1) {
		clearInterval(letterChangeInterval);
		text.innerHTML = innerText;
	}
	cnt--;
}, 150);



