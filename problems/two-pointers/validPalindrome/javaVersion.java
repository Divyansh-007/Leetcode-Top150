class Solution {
    public boolean isAlphaNumeric(char ch){
        if((ch >= '0' && ch <= '9') || (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')){
            return true;
        } 
        return false;
    }

    public boolean isPalindrome(String s) {
        String spaceRemovedStr = s.replaceAll("\\s+","");
        String cleanedLowerCaseStr = "";

        for(int i = 0; i < spaceRemovedStr.length(); i++){
            char curr = spaceRemovedStr.charAt(i);
            if(isAlphaNumeric(curr)){
                cleanedLowerCaseStr += Character.toLowerCase(curr);
            }
        }

        int si = 0;
        int ei = cleanedLowerCaseStr.length() - 1;

        while(si <= ei){
            if(cleanedLowerCaseStr.charAt(si) == cleanedLowerCaseStr.charAt(ei)){
                si++;
                ei--;
            }else{
                return false;
            }
        }

        return true;
    }
}