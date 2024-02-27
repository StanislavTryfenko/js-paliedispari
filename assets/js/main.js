/* Palidroma
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma */

/**
 * check is a word is palindrome
 * @param {string} word 
 * @returns boolean
 */
function isPalindrome(word) {
    // const = function input .split in an array letter per letter .reverse to reverse e .join to return array into string
    const reverseWord = word.split("").reverse().join("");

    return word === reverseWord;
}

document.getElementById('check').addEventListener('click', function() {
    //take word from input
    const inputWord = document.getElementById('word').value;

    //check if word is palindrome or not and output
    if(isPalindrome(inputWord)){
        document.getElementById('result').innerHTML = 'Yes';
    } else{
        document.getElementById('result').innerHTML = 'No';  
    }
});

//////////////////////////////////////////////////////////////////////////////////////////

/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto. */

/**
 * 
 * @returns Number
 */
function PcNumberRange1_5() {
    return Math.ceil(Math.random() * 5);
}

function PariDispari(userNumber, PcNumber){
    
    if((userNumber + PcNumber) % 2 === 0){
        return 'Pari';
    } else{
        return 'Dispari';
    }
}

document.getElementById('play').addEventListener('click', function() {
    //take win condition: if 1  Pari wins, if 2  dispari wins
    const winCondition = document.getElementById('choice').value;
    //take user choice
    const userNumber = document.getElementById('number').value;

    const pcNumber = PcNumberRange1_5()

    document.getElementById('PcNumber').innerHTML = pcNumber
    
    const numberResult = PariDispari(userNumber, pcNumber)

    if(winCondition === '1' && numberResult === 'Pari'){
        document.getElementById('winner').innerHTML = 'Win'
    } else if(winCondition === '2' && numberResult === 'Dispari'){
        document.getElementById('winner').innerHTML = 'Win'
    } else{
        document.getElementById('winner').innerHTML = 'Lost' 
    }

    console.log(winCondition, userNumber, pcNumber, numberResult);
    
})







