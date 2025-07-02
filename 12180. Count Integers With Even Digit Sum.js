// Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

// The digit sum of a positive integer is the sum of all its digits

/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count=0;
    for(i=1;i<=num;i++)
    {
        let sum=0;
        let j=i;
        while(j>0)
        {
            sum+=j%10;
            j=Math.floor(j/10);
        }
        if(sum%2==0)
        count++;

        
    }
    return count
};

console.log(countEven(4));
console.log(countEven(30));