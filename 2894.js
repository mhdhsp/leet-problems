// You are given positive integers n and m.

// Define two integers as follows:

// num1: The sum of all integers in the range [1, n] (both inclusive) that are not divisible by m.
// num2: The sum of all integers in the range [1, n] (both inclusive) that are divisible by m.
// Return the integer num1 - num2.

var differenceOfSums = function(n, m) {
    let num1=0,num2=0;
    for(let i=1;i<=n;i++)
    {
        if(i%m==0)
            num2+=i;
        else
            num1+=i;
    }
    return num1-num2;
};
n = 10, m = 3;
console.log(differenceOfSums(n,m));
n = 5, m = 6;
console.log(differenceOfSums(n,m));
n = 5, m = 1;
console.log(differenceOfSums(n,m));
