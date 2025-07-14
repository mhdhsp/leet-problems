// You are given an integer array prices representing the prices of various chocolates in a store. You are also given a single integer money, which represents your initial amount of money.

// You must buy exactly two chocolates in such a way that you still have some non-negative leftover money. You would like to minimize the sum of the prices of the two chocolates you buy.

// Return the amount of money you will have leftover after buying the two chocolates. If there is no way for you to buy two chocolates without ending up in debt, return money. Note that the leftover must be non-negative.

var buyChoco = function(prices, money) {
    let min1=Infinity,min2=Infinity;
    for(let price of prices)
    {
        if(price < min1)
        {
            min2=min1;
            min1=price;
        }
        else if(price < min2)
        {
            min2=price;
        }
    }
    let sum=min1+min2;
    let lfo=money-sum;
    if(lfo<0)
        return money
    return lfo;
};
prices = [1,2,2], money = 3;
console.log(buyChoco(prices,money));
prices = [3,2,3], money = 3;
console.log(buyChoco(prices,money));