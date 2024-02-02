let number = prompt("Inserisci un numero a 4 cifre")

if (number.length === 4 && !isNaN(number)) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += +number[i];
    }

    document.getElementById("result").innerHTML = "La somma delle cifre di " + number + " è: " + sum;
} else {
    document.getElementById("result").innerHTML = "Inserisci un numero valido di 4 cifre.";
}