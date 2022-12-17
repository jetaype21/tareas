// # Pedir al usuario una cantidad de numeros enteros y ordenarlos de menor a mayor

let formUser = document.querySelector("#formUser");
let outputNum = document.querySelector("#outputNums");
let btnOrdenar = document.querySelector("#btnOrdenar");
let outputNumOrdenados = document.querySelector("#outputNumsOrdenados");

let numeros = [];

formUser.addEventListener("submit", (e) => formUserObtainNum(e));
btnOrdenar.addEventListener("click", (e) => funcionOrdenar(e));

function formUserObtainNum(e) {
  e.preventDefault();
  let numUser = e.target.numUser.value;

  numeros.push(numUser);
  outputNum.textContent = numeros;
  formUser.reset();
}

function funcionOrdenar(e) {
  numeros.sort(function (a, b) {
    return a - b;
  });

  outputNumOrdenados.textContent = numeros;
}
