class Solution {
    public String reverseWords(String s) {
        String[] words = s.trim().split(" ");

        String ans = "";

        for(int i = words.length - 1; i >= 0; i--){
            String curr = words[i];
            if(curr.length() >= 1){
                ans += words[i] + " ";
            }
        }

        return ans.trim();
    }
}