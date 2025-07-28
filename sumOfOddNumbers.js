// 10. Write a function that finds the sum of all odd numbers in an array.

function sumOfOddNumbers(arr) {
    return arr.reduce((sum, num) => num % 2 !== 0 ? sum + num : sum, 0);
}

// Example usage:
// const result = sumOfOddNumbers([1, 2, 3, 4, 5]);
// console.log(result); // Output: 9