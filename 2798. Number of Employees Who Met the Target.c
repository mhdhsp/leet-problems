// 2798. Number of Employees Who Met the Target
public class Solution {
    public int NumberOfEmployeesWhoMetTarget(int[] hours, int target) {
        int num=0;
        foreach(int i in hours)
        {
            if(i>=target)
            num++;
        }
        return num;
    }
}