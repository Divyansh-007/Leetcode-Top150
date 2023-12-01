class Solution {
    public boolean isIsomorphic(String s, String t) {
     HashMap<Character,Character> map = new HashMap<>();
     Set<Character> usedChars = new HashSet<>();
     
     for(int i = 0; i < s.length(); i++){
         char ch1 = s.charAt(i);
         char ch2 = t.charAt(i);

         if(map.containsKey(ch1)){
             if(map.get(ch1) != ch2){
                 return false;
             }
         }else{
             if(usedChars.contains(ch2)){
                 return false;
             }else{
                 map.put(ch1,ch2);
                 usedChars.add(ch2);
             }
             
         }
     }

     return true;   
    }
}