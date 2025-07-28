// Write a function `longestCommonPrefix(strs)` that takes an array of strings `strs` and returns the longest common prefix shared by all strings. If no common prefix exists, return an empty string.


function removeDuplicates(array) {
    if (array.length === 0) return 0;
    
    let lastUniquePosition = 0; // Tracks where the last unique element was placed

    for (let currentPosition = 1; currentPosition < array.length; currentPosition++) {
        if (array[currentPosition] !== array[lastUniquePosition]) {
            lastUniquePosition++;
            array[lastUniquePosition] = array[currentPosition];
        }
        // If equal, skip (it's a duplicate)
    }
    
    return lastUniquePosition + 1; // Number of unique elements
}