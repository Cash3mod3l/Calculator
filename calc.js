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
			display.value = "";
			break;
		case "=":
			if (display.value.search(/[^0-9*/+-.%]/im) != -1) {
				return;
			}

			display.value = eval(display.value).toFixed(2);
			break;
		case "+/-":
			display.value *= -1;
			break;
		default:
			display.value += value;
	}
});
