let number = prompt("Inserisci un numero")

let numero = +number;

const resultCube = document.getElementById("result")

for (let i = 1; i <= numero; i++) {
    const cubeNumber = i * i * i;
    resultCube.innerHTML += cubeNumber
}