let sum = 0;

for (let i = 1; i <= 10; i++) {
    let numeroStringa = prompt("Inserisci un numero:");
    sum += Number(numeroStringa) || 0;
}


document.getElementById("result").innerHTML = "La somma di tutti i numeri inseriti è: " + sum;