// getting the html elements
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");

// for increment button click

function adding() {
  const value = Number(displayValue.innerText);

  displayValue.innerText = value + 1;
  const a = displayValue.innerText;
  return a;
}
incrementBtn.addEventListener("click", adding);

// for decrement button click

function sub() {
  const value = Number(displayValue.innerText);

  displayValue.innerText = value - 1;
  const a = displayValue.innerText;
  return a;
}
decrementBtn.addEventListener("click", sub);

// for reset button click

function res() {
  displayValue.innerText = 0;
  const a = displayValue.innerText;
  return a;
}
resetBtn.addEventListener("click", res);
