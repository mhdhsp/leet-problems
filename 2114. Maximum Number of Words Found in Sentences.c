// 2114. Maximum Number of Words Found in Sentences
public class Solution {
    public int MostWordsFound(string[] sentences) {
        int large=0;
        for(int i=0;i<sentences.Length;i++)
        {
            string[] ar=sentences[i].Split(" ");
           if(ar.Length>large)
            large=ar.Length;
        }
        return large;
    }
}