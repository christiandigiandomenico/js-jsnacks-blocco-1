const firstWord = prompt("Scrivi una parola")
const secondWord = prompt("Scrivi un'altra parola")

if (firstWord.length > secondWord.length) {
    document.getElementById("result").innerHTML = "Parola più corta: " + secondWord + "<br>Parola più lunga: " + firstWord;
} else if (firstWord.length < secondWord.length) {
    document.getElementById("result").innerHTML = "Parola più corta: " + firstWord + "<br>Parola più lunga: " + secondWord;
} else {
    document.getElementById("result").innerHTML = "Le parole hanno la stessa lunghezza: " + firstWord + " e " + secondWord;
}