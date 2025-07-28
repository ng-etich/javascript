// 17. Write a function that returns the sum of numbers at even indexes in an array.

function sumEvenIndexed(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 2) {
    sum += arr[i];
  }
  return sum;
}

const numbers = [10, 20, 30, 40, 50];
const result = sumEvenIndexed(numbers);
console.log(result);  // Output: 90 (10 + 30 + 50)
