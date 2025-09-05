// 2108. Find First Palindromic String in the Array2108. Find First Palindromic String in the Array

public class Solution {
    public string FirstPalindrome(string[] words) {
        foreach(string word in words)
        {
            string reversed=new String(word.Reverse().ToArray());
            if(word==reversed)
             return word;

        }
        return "";
    }
}

public class Solution {
    public string FirstPalindrome(string[] words) {
        for(int i=0;i<words.Length;i++)
        {
            string temp=words[i];
            int flag=0;
            for(int j=0;j<temp.Length;j++)
            {
                if(temp[j] != temp[temp.Length-(1+j)])
                {
                    flag=1;
                    break;
                }
            }
            if(flag==0)
            return words[i];
           
        }
        return "";
    }
}