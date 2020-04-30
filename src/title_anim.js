export const transformText = function(element, inputText, cnt) {
	const charSet = "10/{}&$%_#";

	const letterChangeInterval = setInterval(function() {
		let newString = ""
		for (let i = 0; i < inputText.length; i++) {
			
			let charIdx = Math.floor(Math.random() * charSet.length)
			let randomChar = charSet[charIdx];
			let chance = Math.random() * inputText.length;
			if (" .,".includes(inputText[i]) || chance > cnt) {
				newString += inputText[i];
			} else {
				newString += randomChar;
			}
		}

		element.innerHTML = newString;
		
		if (cnt <= 1) {
			clearInterval(letterChangeInterval);
			element.innerHTML = inputText;
		}
		cnt--;
	}, 150);
}




