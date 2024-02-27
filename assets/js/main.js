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

function PcNumberRange1_5() {
    return Math.ceil(Math.random() * 5);
}

function PariDispari(userNumber, pcNumber){
    
    if((Number(userNumber) + pcNumber) % 2 === 0){
        console.log("PARI");
        return 'Pari';
    } else{
        console.log("DISPARI");
        return 'Dispari';
    }
}

document.getElementById('play').addEventListener('click', function() {
    //take win condition: if 1  Pari wins, if 2  dispari wins
    const winCondition = document.getElementById('choice').value;
    //take user number
    const userNumber = document.getElementById('number').value;
    //take pc number
    const pcNumber = PcNumberRange1_5();
    //communicate to use pc choice
    document.getElementById('PcNumber').innerHTML = pcNumber;
    //check if pari or dispari
    const pariOrDispari = PariDispari(userNumber, pcNumber);

    //dectretate winner
    if((winCondition === '1' && pariOrDispari === 'Pari') || (winCondition === '2' && pariOrDispari === 'Dispari')){
        document.getElementById('winner').innerHTML = 'Win'
    } else{
        document.getElementById('winner').innerHTML = 'Lost'
    }

    console.log(winCondition, userNumber, pcNumber, pariOrDispari);
})







