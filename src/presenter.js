import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

const first_m = document.querySelector("#primer-numero-m");
const second_m = document.querySelector("#segundo-numero-m");
const form2 = document.querySelector("#multiplicar-form");
const div_mult = document.querySelector("#resultado-div-mult")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";


});

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first_m.value);
  const secondNumber = Number.parseInt(second_m.value);

  div_mult.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";

});