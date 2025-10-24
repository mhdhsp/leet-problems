2942. Find Words Containing Character
public class Solution {
    public IList<int> FindWordsContaining(string[] words, char x) {
       List<int> arr=new List<int>();
       for(int i=0;i<words.Length;i++)
       {
        string s=words[i];
        if(s.Contains(x))
            arr.Add(i);
       } 
       return arr;
    }
}