// CharacterData(index)
let mySentence=`this is my sentence and i an skiping the punctuation and grammar`

console.log(mySentence.charAt(39));
// at(index)>>supports character at index with negative digits
console.log(mySentence.at(-39));

console.log(mySentence.toUpperCase());

console.log(mySentence.toUpperCase().includes(`SENTENCE`));

console.log(mySentence.startsWith(`i`));

// what character is found at index 10 in the sentence
console.log(mySentence.charAt(10));

console.log(mySentence.charAt(-5));

console.log(mySentence.toUpperCase());

console.log(mySentence.toLowerCase());




let mySentence = "this is my sentence and i am skipping the punctuation and grammar"

// charAt(30) returns the character at index 30 (0-based)
console.log(mySentence.charAt(30))  // Output: "u" (from "punctuation")

// charAt(-30) returns an empty string since negative indices aren't valid
console.log(mySentence.charAt(-30)) // Output: ""

// Converts the entire string to uppercase
console.log(mySentence.toUpperCase()) 
// Output: "THIS IS MY SENTENCE AND I AM SKIPPING THE PUNCTUATION AND GRAMMAR"

// Converts the entire string to lowercase (though it's already lowercase)
console.log(mySentence.toLowerCase()) 
// Output: "this is my sentence and i am skipping the punctuation and grammar"

// Returns substring from index 3 to 10 (not including 10)
console.log(mySentence.substring(3,10)) // Output: "s is m"

// Splits the string at every "i", removing the "i"s
console.log(mySentence.split("i")) 
// Output: ["th", "s ", "s my sentence and ", " am sk", "pp", "ng the punctuat", "on and grammar"]

// Splits the string at every space
console.log(mySentence.split(" ")) 
// Output: ["this", "is", "my", "sentence", "and", "i", "am", "skipping", "the", "punctuation", "and", "grammar"]

// Returns the last index where "i" appears
console.log(mySentence.lastIndexOf("i")) // Output: 54 (last "i" in "punctuation")

// Checks if uppercase version of string includes "SENTENCE"
console.log(mySentence.toUpperCase().includes("SENTENCE")) // Output: true

// Checks if string starts with "this"
console.log(mySentence.startsWith("this")) // Output: true



