// 7. Write a function that takes an array and returns the smallest number in the array.


function findSmallest(arr) {
  if (arr.length === 0) return undefined; // handle empty array

  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}


console.log(findSmallest([10, 5, 3, 8]));  // Output: 3
console.log(findSmallest([])); 