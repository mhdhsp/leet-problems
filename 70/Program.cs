// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

using System;
namespace SetBit
{
    class SetBit
    {
        public class Solution
        {
            public static int ClimbStairs(int n)
            {
                if (n == 0 || n == 1) return 1;
                int first = 1, second = 1;
                for (int i = 2; i <= n; i++)
                {
                    int temp = second;
                    second = first + second;
                    first = temp;
                }
                return second;

            }
        }

        static void Main(string[] args)
        {
            Console.WriteLine("enterthe num of stairs");
            int n = Convert.ToInt16(Console.ReadLine());
            Console.WriteLine(Solution.ClimbStairs(n));

        }
    }
}