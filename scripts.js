// First time operation buttons are pressed, the input should switch to strValue2 BUT repeated press should not change the destination

// Variables
let strValue1 = "";
let operationValue = "";
let strValue2 = "";

function displayVal(val1, val2, opVal) {
  return `${val1} ${opVal} ${val2}`;
}

// Determines whether the input value goes to strValue1 or
// strValue2
let valueSwitch = 0;

// DOM
const calcDisplay = document.querySelector(".calculator--display");

const num1 = document.querySelector(".one");
const num2 = document.querySelector(".two");
const num3 = document.querySelector(".three");
const num4 = document.querySelector(".four");
const num5 = document.querySelector(".five");
const num6 = document.querySelector(".six");
const num7 = document.querySelector(".seven");
const num8 = document.querySelector(".eight");
const num9 = document.querySelector(".nine");
const num0 = document.querySelector(".zero");

const add = document.querySelector(".add");
const substract = document.querySelector(".substract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equal = document.querySelector(".equal");
const CE = document.querySelector(".CE");

// Utils
function numInputFunc(num, e) {
  e.preventDefault();

  if (strValue1.length === 0) {
    strValue1 = strValue1 + `${num}`;
    calcDisplay.textContent = displayVal(strValue1, strValue2, operationValue);
  } else {
    strValue2 = strValue2 + `${num}`;
    calcDisplay.textContent = displayVal(strValue1, strValue2, operationValue);
  }
}

function operate(value1, value2, operation) {
  if (operation === "+") {
    return Number(value1) + Number(value2);
  }
  if (operation === "-") {
    return Number(value1) - Number(value2);
  }
  if (operation === "x") {
    return Number(value1) * Number(value2);
  }
  if (operation === "/") {
    return Number(value1) / Number(value2);
  }
}

function operationInputFunc(op, e) {
  e.preventDefault();
  if (strValue1.length > 0 && strValue2.length < 1) {
    operationValue = op;

    calcDisplay.textContent = displayVal(strValue1, strValue2, operationValue);
  } else if (strValue2.length > 0) {
    strValue1 = operate(strValue1, strValue2, operationValue);

    operationValue = op;
    strValue2 = "";

    calcDisplay.textContent = displayVal(strValue1, strValue2, operationValue);
  }
}

function equalInputFunc(e) {
  e.preventDefault();
  if (strValue1.length > 0 && strValue2.length > 0) {
    calcDisplay.textContent = operate(strValue1, strValue2, operationValue);
  }
}

function clearInputFunc(e) {
  e.preventDefault();
  strValue1 = "";
  operationValue = "";
  strValue2 = "";
}

function equalInputFunc(e) {
  e.preventDefault();

  // Stores the result of calculation to be immediately displayed
  const result = operate(strValue1, strValue2, operationValue);

  calcDisplay.textContent = result;
}

num1.addEventListener("click", (e) => {
  numInputFunc(1, e);
});
num2.addEventListener("click", (e) => {
  numInputFunc(2, e);
});
num3.addEventListener("click", (e) => {
  numInputFunc(3, e);
});
num4.addEventListener("click", (e) => {
  numInputFunc(4, e);
});
num5.addEventListener("click", (e) => {
  numInputFunc(5, e);
});
num6.addEventListener("click", (e) => {
  numInputFunc(6, e);
});
num7.addEventListener("click", (e) => {
  numInputFunc(7, e);
});
num8.addEventListener("click", (e) => {
  numInputFunc(8, e);
});
num9.addEventListener("click", (e) => {
  numInputFunc(9, e);
});
num0.addEventListener("click", (e) => {
  numInputFunc(0, e);
});

add.addEventListener("click", (e) => {
  operationInputFunc("+", e);
});
multiply.addEventListener("click", (e) => {
  operationInputFunc("x", e);
});
substract.addEventListener("click", (e) => {
  operationInputFunc("-", e);
});
divide.addEventListener("click", (e) => {
  operationInputFunc("/", e);
});
equal.addEventListener("click", (e) => {
  equalInputFunc(e);
});
CE.addEventListener("click", (e) => {
  clearInputFunc(e);
});
