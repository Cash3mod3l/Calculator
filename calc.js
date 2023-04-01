const display = document.querySelector("#dis");
const calc = document.querySelector("#calc");
const result = document.querySelector(".btnResult");

calc.addEventListener("click", function (event) {
	const value = event.target.innerText;

	if (!event.target.classList.contains("btn")) {
		return;
	}

	switch (value) {
		case "C":
			display.innerText = "";
			break;
		case "=":
			if (display.innerText.search(/[^0-9*/+-.%]/im) != -1) {
				return;
			}
			display.innerText = eval(display.innerText).toFixed(2);
			break;
		case "+/-":
			display.innerText *= -1;
			break;
		default:
			display.innerText += value;
	}
});
