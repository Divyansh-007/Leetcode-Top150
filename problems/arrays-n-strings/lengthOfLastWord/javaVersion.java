class Solution {
    public int lengthOfLastWord(String s) {
        String[] words = s.replaceAll("//s"," ").split(" ");
        
        return words[words.length - 1].length();
    }
}