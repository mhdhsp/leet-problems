
// Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).

using System;
namespace SetBit
{
    class SetBit
    {
        public static int SearchInsert(int[] nums, int target) {
            int first=0;
             int last=nums.Length-1;
            while (true)
            {
                int mid = (first + last) / 2;
                if (target <= mid)
                {
                    if (target < nums[mid])
                    {
                        last = mid - 1;
                    }
                    else if (target > nums[mid])
                    {
                        first = mid + 1;
                    }
                    else if (target == nums[mid])
                        return nums[mid];
                }

            }
      public   static void Main(string[] args)
            {
                int[] nums = new int[] { 1, 3, 5, 6 };
                int target = 5;
                int res = SetBit.SearchInsert(nums, target);
                Console.WriteLine(res);
            }
        }
    }
}