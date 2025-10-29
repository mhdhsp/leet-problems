// 2769. Find the Maximum Achievable Number
public class Solution {
    public int TheMaximumAchievableX(int num, int t) {
        int x=num;
        for(int i=1;i<=t;i++)
        {
            x=x+2;
        }
        return x;
    }
}