let oddNumbers = [];

for (let i = 1; i <= 6; i++) {
    let numeroStringa = prompt("Inserisci un numero:");

    if (numeroStringa % 2 !== 0) {
        oddNumbers.push(numeroStringa);
    }

}

document.getElementById("result").innerHTML = "Numeri dispari inseriti nell'array: " + oddNumbers;