var sumOfUnique = function(nums) {
   
   sum=0;
   
  nums.forEach((element,index) => {
        
       let num2=nums.slice(0,index)+nums.slice(index+1)
       if(num2.includes(element)==false)
        sum+=element;    
  });

// let set =new Set(nums);
// console.log(set);

// for(let i of set)
//     sum+=i;
   console.log(sum);
   
};
sumOfUnique([1,2,3,2]);
sumOfUnique([1,1,1,1,1]);