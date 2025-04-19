// TODO: this file! :)
const addNumberForm = document.querySelector("form");
const numberInput = document.querySelector('input[name="number]');
const sortOneButton = document.querySelector("#sortOne");
const sortAllButton = document.querySelector("#sortAll");

let state = {
  numberBank: [],
  odds: [],
  evens:[],
};

const addNumberToBank = (number) => {
  state.numberBank.push(number);
  render();
};

const sortOne = () => {
  if(state.numberBank.length > 0) {
    const number = state.numberBank.shift();
    number % 2 === 0 ? state.evens.push(number) : state.odd.push(number);
  }
};

const sortAll = () => {
  while (state.numberBank.length > 0) {
    const number = state.numberBank.shift();
    number % 2 === 0 ? state.evens.push(number) : state.odds.push(number);
    console.log(state.numberBank);
  }
}

const render = () => {
  document.querySelector("#numberBank output").textContent =
  state.numberBank.join(",");
  document.querySelector("#odds output").textContent = state.odds.join(",");
  document.querySelector("#evens output").textContent = state.evens.join(",");
};

addNumberForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const number = parseInt(numberInput.value);
  if (!isNaN(number)) {
    addNumberToBank(number);
    numberInput.value = "";
  }
});

sortOneButton.addEventListener("click", sortOne);
sortAllButton.addEventListener("click", sortAll);

render();