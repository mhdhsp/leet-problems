// An integer divisible by the sum of its digits is said to be a Harshad number. 
// You are given an integer x. Return the sum of the digits of x if x is a Harshad number, otherwise, return -1

var sumOfTheDigitsOfHarshadNumber = function(x) {
    let temp=x;
    let sum=0;
    while(temp>0)
    {
        sum+=temp%10;
        temp=Math.floor(temp/10);
    }
    if(x%sum==0)
        return sum
    return-1
};

console.log(sumOfTheDigitsOfHarshadNumber(18));
console.log(sumOfTheDigitsOfHarshadNumber(23));