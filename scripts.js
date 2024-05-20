// Numbers clicked

// Operations clicked, save the number value

// Second number clicked

// Upon clicking operations again, execute operation with previous number

// Variables
let strValue1 = [];
let numValue1 = Number(strValue1.reduce((acc, curr) => acc + curr, ""));

let strValue2 = [];
let numValue2 = Number(strValue2.reduce((acc, curr) => acc + curr, ""));

// Determines whether the input value goes to strValue1 or
// strValue2
let valueSwitch = 0;

// Operation
function operate(value1, value2, operation) {
  if (operation === "+") {
    return value1 + value2;
  }
  if (operation === "-") {
    return value1 - value2;
  }
  if (operation === "x") {
    return value1 * value2;
  }
  if (operation === "/") {
    return value1 / value2;
  }
}

// DOM
const num1 = document.querySelector(".one");
const num2 = document.querySelector(".two");
const num3 = document.querySelector(".three");
const num4 = document.querySelector(".four");
const num5 = document.querySelector(".five");
const num6 = document.querySelector(".six");
const num7 = document.querySelector(".seven");
const num8 = document.querySelector(".eight");

const add = document.querySelector(".add");
const substract = document.querySelector(".substract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equal = document.querySelector(".equal");
const CE = document.querySelector(".CE");

num1.addEventListener("click", () => {
  strValue1.push("1");
});
