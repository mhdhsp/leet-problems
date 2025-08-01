
// Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).

using System;
namespace SetBit
{
    class SetBit
    {
        public static int FindBinary(int n)
        {
            string binary = "";
            int count = 0;
            while (n > 0)
            {
                int rem = n % 2;
                binary = rem + binary;
                n = n / 2;
            }

            for (int i = 0; i < binary.Length; i++)
            {
                if (binary[i] == '1')
                    count++;
            }

            return count;
        }
        static void Main(string[] args)
        {
            SetBit.FindBinary(10);
        }
    }
}