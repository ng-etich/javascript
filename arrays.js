// // is a datastorage that can store more than one value at a time 
// syntax of an array>>arrayName then the square brackets[] and then the values inside the square brackets separate
// example:using the array literal declaration
// let arrayName=[value1, value2, value3, ...array.]

// types of arrays:they are various types of arrays in javascript
// 1. single dimensional arrays:  these are the most common types of arrays, which store a list of items in a single row or column.aexample: let fruits=[`apple`, `banana`,`orange`]
// 2.multi-dimensional arrays: these are arrays that contain other arryas, allpwing for a grid-like structure.
// example: let matrix=[[1, 2, 3], [4, a, c], [7,8,9]];
// how do you declare an emoty array:
// let emptyArray=[];
//     using the array consturctor:
//     let emptyArry= newArray("value1" "value2")
//     Arrays are zero indexd elemenets >>they start counting from zero
//     when accesing elements in an array you use the index of element you want to access

let students=["john", "hope", "ngetich", "brian", "gerald", "crispin", ["hello", "world"], 100, true]
console.log(students);


console.log(students[6][0]);
// array methods: arrays have built in methids that allow you to manipulate and work with the data the contain

// length>>computes the length of the array which is the number of elements in the array
console.log(students.length);
// 
// how do i add elements to an array? i use the push method which adds an element at the last end
let newArray=students.push("peter","manu");
console.log(newArray);
console.log(students);

let removedElements=students.pop()
console.log(students);
console.log(removedElements);

students.shift();// removes the first element at the beginning of the array



// ARRAYS IN JAVASCRIPT

// ✅ Definition:
// - A data type/storage that can store more than one value at a time.
// - Stores values side by side in a single variable.
// - Can contain logically related data (elements that relate to each other).
// - Used to store a list of items like numbers, strings, or objects.
// - Arrays can store methods (functions) inside objects.

// ✅ Syntax of an Array:
// arrayName = [value1, value2, value3];
let arrayName = ["apple", "banana", "cherry"];

// ✅ Types of Arrays:

// 1. Single-dimensional array:
let fruits = ["apple", "banana", "orange"];

// 2. Multi-dimensional array (grid-like structure):
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// ✅ Declaring an Empty Array:
let emptyArray = [];

// ✅ Using Array Constructor:
let newArray1 = new Array();
let newArray2 = new Array("value1", "value2", "value3");

// ✅ Array Indexing (zero-based):
let newStudents = [
  "John", "Hope", "Brian", "Ngetich", "Martin",
  "Gerald", "Crispin", "Walter", "Peter", 100, true
];

console.log(students[2]); // Output: Brian

// ✅ Common Array Methods:

// .length → returns the number of elements
console.log(students.length); // Output: 11

// .push() → adds an element to the end
students.push("Faith");
console.log(students);

// .pop() → removes the last element
students.pop();
console.log(students);

// .shift() → removes the first element
students.shift();
console.log(students);

// .unshift() → adds a new element to the beginning
students.unshift("Anna");
console.log(students);

// Example with fruits:
let fruitsList = ["apple", "banana", "orange", "watermelon"];
fruitsList.shift(); // Removes 'apple'
console.log(fruitsList); // Output: ['banana', 'orange', 'watermelon']

fruitsList.unshift("kiwi"); // Adds 'kiwi' at beginning
console.log(fruitsList); // Output: ['kiwi', 'banana', 'orange', 'watermelon']

// ✅ .splice() → Add/Remove/Replace at specific index
let items = ["apple", "banana", "orange", "watermelon"];
items.splice(1, 1, "kiwi", "lemon"); // From index 1, remove 1, insert 2
console.log(items); // Output: ['apple', 'kiwi', 'lemon', 'orange', 'watermelon']

// ✅ .slice() → Extracts part of an array (non-destructive)
let fruits2 = ["apple", "banana", "orange", "watermelon"];
console.log(fruits2.slice(1, 3)); // Output: ['banana', 'orange']

// slice does NOT modify the original array
let fruits3 = ["apple", "banana", "orange", "watermelon"];
let slicedFruits = fruits3.slice(1, 3);
console.log(slicedFruits); // Output: ['banana', 'orange']
console.log(fruits3);      // Output: ['apple', 'banana', 'orange', 'watermelon']










