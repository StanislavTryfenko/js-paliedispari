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
    let inputWord = document.getElementById('word').value;

    //check if word is palindrome or not and output
    if(isPalindrome(inputWord)){
        document.getElementById('result').innerHTML = 'Yes';
    } else{
        document.getElementById('result').innerHTML = 'No';  
    }
});


