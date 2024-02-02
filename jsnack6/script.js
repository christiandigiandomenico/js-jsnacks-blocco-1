let somma = 0;

for (let i = 1; i <= 10; i++) {
    somma += i;
}

let media = somma / 10;

// Stampa la somma e la media in console
document.getElementById("result").innerHTML = "La somma è: " + somma;
document.getElementById("result2").innerHTML = "La media è: " + media;