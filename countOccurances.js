// 8. Write a function that counts how many times a specific value appears in an array. in javascript

function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
}

const numbers = [1, 2, 3, 2, 4, 2, 5];
const result = countOccurrences(numbers, 2);
console.log(result);  // Output: 3