//write a function rotateArray(arr, k)  that takes an array `arr`and an integer `k` and rotates the array to the right by `k` steps in place


function rotateArray(arr, k){
    if(k<0 || k> arr.length){
        return"Invalid input: k must be a non-negative integer less than the length of the array.";
    }
    // Normalize k to handle cases where k > arr.length
    k = k % arr.length;
    // For right rotation, we split at length-k
    const splitIndex = arr.length - k;
    const firstPart = arr.slice(0, splitIndex);
    const secondPart = arr.slice(splitIndex);

    console.log("First part:", firstPart);
    console.log("Second part:", secondPart);
    
    return secondPart.concat(firstPart);
}


const result = rotateArray([1, 2, 3, 4, 5], 3);
console.log("Final Result:", result);
