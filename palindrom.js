// write a function `isPalindrome(s)` that takes a string `s`and returns `true` if it is a palindrome (ignoring non-alphanumeric characters and case), otherwise returns `false`.

//palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
//eg "racecar", is a palindrome because it reads the same backward as forward."

// function isPalindrome(s) {
//     // Normalize the string: remove non-alphanumeric characters and convert to lowercase
//     const normalizedStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
//     // Check if the normalized string is equal to its reverse
//     const reversedStr = normalizedStr.split('').reverse().join('');
    
//     return normalizedStr === reversedStr;

// }

// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
// console.log(isPalindrome("race a car")); // false
// console.log(isPalindrome(" ")); // true (empty or single character strings are palindromes)


function isPalindrome(s) {
    return s === s.split('').reverse().join('');

}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true (empty or single character strings are palindromes)