// LeetCode - 1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let twoSum = (nums, target) => {
  const previousValues = {};
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const neededValue = target - currentNumber;
    const index2 = previousValues[neededValue];
    if (index2 != null) {
      return [index2, i];
    } else {
      previousValues[currentNumber] = i;
    }
  }
};

console.log(twoSum([2, 8, 3, 6], 10));
