// Codewars - Grasshopper - Array Mean
// Find mean (average) of a list of numbers in an array.

const findAverage = (nums) => nums.reduce((a, b) => a + b) / nums.length;
console.log(findAverage([1, 3, 5, 7]));
