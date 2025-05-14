var deff=function(n){
pdt=1,sum=0;
while(n>0)
{
    rem=n%10;
    sum+=rem;
    pdt*=rem;
    n=Math.floor(n/10);


}
console.log(pdt-sum);
}

deff(4421);