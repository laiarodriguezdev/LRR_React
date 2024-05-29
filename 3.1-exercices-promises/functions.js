// MODUL == 0
function isDivisibleByTwo(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve(`${number} és divisible per 2.`);
        } else {
            reject(`${number} no és divisible per 2.`);
        }
    });
}

isDivisibleByTwo(5)
    .then(resultat => console.log(resultat))
    .catch(error => console.log(error));

isDivisibleByTwo(6)
    .then(resultat => console.log(resultat))
    .catch(error => console.log(error));


// ENTRE EL 0-10.
function checkRange(value) {
    return new Promise(function(resolve, reject) {
        if (value >= 0 && value <= 10) {
            resolve(`${value} està entre 0 i 10.`);
        } else {
            reject(`${value} no està entre 0 i 10.`);
        }
    });
}

checkRange(5)
    .then(resultat => console.log(resultat))
    .catch(error => console.log(error));

checkRange(15)
    .then(resultat => console.log(resultat))
    .catch(error => console.log(error));



// ES UNA VOCAL????
let arr = ["a", "e", "i", "o", "u"];

function esVocal(letter) {
    return new Promise((resolve, reject) => {
        if (arr.includes(letter.toLowerCase())) {
            resolve(`${letter} és una vocal.`);
        } else {
            reject(`${letter} no és una vocal.`);
        }
    });
}

esVocal("a")
    .then(resultat => console.log(resultat))
    .catch(error => console.log(error));

esVocal("z")
    .then(resultat => console.log(resultat))
    .catch(error => console.log(error));


//DIVIDIR
function divideNumbers(a, b) {
    return new Promise((resolve, reject) => {
        if (b !== 0) {
            resolve(`El quocient de ${a} entre ${b} és ${a / b}.`);
        } else {
            reject("Error: no es pot dividir per zero.");
        }
    });
}

division(10, 2)
    .then(resultat => console.log(resultat))
    .catch(error => console.log(error.message));