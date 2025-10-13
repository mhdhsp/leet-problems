public class Solution {
    public int XorOperation(int n, int start) {
        int[] arr=new int[n];
        int res=0;
        for(int i=0;i<n;i++)
        {
            res=res^(start+2*i);
        }
       return res;
    }
}