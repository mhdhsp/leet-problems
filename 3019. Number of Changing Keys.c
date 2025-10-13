public class Solution {
    public int CountKeyChanges(string s) {
        int count=0;
        for(int i=0;i<s.Length-1;i++)
        {
            if(Char.ToLower(s[i]) != Char.ToLower(s[i+1]))
                count++;
        }
        return count;
    }
}
