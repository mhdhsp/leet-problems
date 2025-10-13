3024. Type of Triangle

public class Solution {
    public string TriangleType(int[] nums) {
        if(nums[1]+nums[0]<=nums[2] || nums[1]+nums[2]<=nums[0] || nums[0]+nums[2]<=nums[1])
        return "none";
            
       if(nums[0]==nums[1])
       {
        if(nums[1]==nums[2])
            return "equilateral";
        else 
            return "isosceles";
       } 
       else if(nums[0]==nums[2] || nums[1]==nums[2])
        return "isosceles";
        else 
        return "scalene";
    }
}