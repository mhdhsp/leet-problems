public class Solution {
    public int[] NumberGame(int[] nums) {
        int[] arr=new int[nums.Length];
        Array.Sort(nums);
        // Array.Reverse(nums);
        List<int> list= new List<int>(nums);
        int i=0;
        while(list.Count > 0)
        {
            int Alice=list[0];
            int Bob=list[1];
            list.RemoveAt(0);
            list.RemoveAt(0);
            arr[i]=Bob;
            arr[i+1]=Alice;
            i+=2;
        }
        return arr;
    }
}