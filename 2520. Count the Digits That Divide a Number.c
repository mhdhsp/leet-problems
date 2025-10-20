// 2520. Count the Digits That Divide a Number
public class Solution {
    public int CountDigits(int num) {
        int count=0,temp=num;
        while(num>0)
        {
            int digit=num%10;
            if(temp%digit==0)
                count++;
            num=num/10;
        }
        return count;
    }
}