// You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.

 var differenceOfSum = function(nums) {
    let eleSum=0,digSum=0;
    nums.map(value=>{
        eleSum+=value;
        while(value>0)
        {
            digSum+=value%10;
            value=Math.floor(value/10);
        }
    });

    return Math.floor(eleSum-digSum);
};


console.log(differenceOfSum([1,15,6,3]));
console.log(differenceOfSum([1,2,3,4]));