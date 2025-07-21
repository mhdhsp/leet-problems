// You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.

// You then do the following steps:

// If original is found in nums, multiply it by two (i.e., set original = 2 * original).
// Otherwise, stop the process.
// Repeat this process with the new number as long as you keep finding the number.
// Return the final value of original.

var findFinalValue = function(nums, original) {
    while(nums.includes(original))
    {
        original*=2;
    }
    return original
};


nums = [5,3,6,1,12], original = 3;
console.log(findFinalValue(nums,original));
nums = [2,7,9], original = 4;
console.log(findFinalValue(nums,original));