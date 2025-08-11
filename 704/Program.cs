// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

    public class Solution {
    public int Search(int[] nums, int target)
     {
        int left =0,right=nums.Length-1;
        while(left<=right)
        {
            int mid=left+(right-left)/2;
            if(target==nums[mid])
             return mid;
             if(target<=nums[mid])
                right=mid-1;
                else
                left=mid+1;
            
        }
        return -1;
    }
}