// 1832. Check if the Sentence Is Pangram

public class Solution {
    public bool CheckIfPangram(string sentence) {
        for(int i=97;i<=122;i++)
        {
            char c=(char)i;
            if(!sentence.Contains(c))
                return false;
        }
        return true;
    }
}