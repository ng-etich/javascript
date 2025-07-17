// A JavaScript Array is a list-like object that is used to store multiple values in a single variable.

const ourList = ["apple", "bread", "milk", "eggs", "cheese"];

console.log(ourList[7]);//output is undefined


// Arrays can hold items of any type, including numbers, strings, objects, and even other arrays.
const mixedArray = [4, 6, "banana", { name: "John" }, [1, 2, 3]];

// Accessing values in an array is done using index numbers, starting from 0.
// Technically an array is an object, but it has indexed properties instead of named properties.

console.log(ourList[0]); // Output: apple - accessing the first item
console.log(ourList[2]); // Output: milk - accessing the third item

// Task: Log the second item in the mixed array
console.log(mixedArray[1]);

//log number 2 from the last item in the mixed array
console.log(mixedArray[3][1]);

//log the name john
console.log(mixedArray[2].name);