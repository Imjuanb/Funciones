// parte 1
const example = function (numbersOne, numbersTwo, numbersThree){
    return numbersOne+numbersTwo+numbersThree;
}
const numbersOne = document.querySelector("#numbersOne")
const numbersTwo = document.querySelector("#numbersTwo")
const numbersThree = document.querySelector("#numbersThree")
const button = document.querySelector("#button") 
const result = document.querySelector("#result") 

button.addEventListener("click", () => {
    const cNumbersOne = +numbersOne.value;
    const cNumbersTwo = +numbersTwo.value;
    const cNumbersThree = +numbersThree.value;
    const amountExample = example(cNumbersOne, cNumbersTwo, cNumbersThree)
    result.innerHTML = `<b>Total: ${amountExample} </b>`;
})
// Parte 2
const addition = (amountOne, amountTwo) => amountOne + amountTwo;
const amountOne = document.querySelector("#amountOne")
const amountTwo = document.querySelector("#amountTwo")
const buttonTwo = document.querySelector("#buttonTwo")
const resultTwo = document.querySelector("#resultTwo")

buttonTwo.addEventListener("click", () => {
    const calculateOne = +amountOne.value;
    const calculateTwo = +amountTwo.value;
    const amount = addition(calculateOne, calculateTwo)
    resultTwo.innerHTML = `<b>Total: ${amount} </b>`;
})
// Parte 3
const element = document.querySelector("#ele1")
element.getElementsByClassName.backgroundColor = "green"
const paint = function(setColor, color) {
    setColor.style.backgroundColor = color
}
element.addEventListener("click", () => paint(element, "yellow"));
// Parte 4
const divOne = document.getElementById("divOne");
const divTwo = document.getElementById("divTwo");
const divThree = document.getElementById("divThree");
const divFour = document.getElementById("divFour");

document.addEventListener("keydown", function (event) {
	if (event.key === "a" || event.key === "A") {
		colorselect = "black";
		document.getElementById("msgText").innerHTML =
		document.getElementById("msgText").style.color = "black";
		console.log("cambia color 01 " + colorselect);
		return;
	}

	if (event.key === "s" || event.key === "S") {
		colorselect = "yellow";
		document.getElementById("msgText").innerHTML =
		document.getElementById("msgText").style.color = "yellow";
		console.log("cambia color 02 " + colorselect);
		return;
	}

	if (event.key === "d" || event.key === "D") {
		colorselect = "red";
		document.getElementById("msgText").innerHTML =
		document.getElementById("msgText").style.color = "red";
		console.log("cambia color 03 " + colorselect);
		return;
	}
});

function changeColor(evento) {
	const casilla = evento.target;
	casilla.style.background = colorselect;
	casilla.style.color = colorselectext;
	casilla.innerHTML = colorText;
}

divOne.addEventListener("click", changeColor);
divTwo.addEventListener("click", changeColor);
divThree.addEventListener("click", changeColor);
divFour.addEventListener("click", changeColor)