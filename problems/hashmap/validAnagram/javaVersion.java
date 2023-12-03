class Solution {
    public boolean isAnagram(String s, String t) {
        HashMap<Character,Integer> map = new HashMap<>();

        for(int i = 0; i < s.length(); i++){
            char curr = s.charAt(i);
            if(map.containsKey(curr)){
                map.put(curr,map.get(curr) + 1);
                continue;
            }
            map.put(curr,1);
        }

        for(int j = 0; j < t.length(); j++){
            char curr = t.charAt(j);
            if(map.containsKey(curr)){
                map.put(curr,map.get(curr) - 1);
                continue;
            }else{
                return false;
            }
        }

        Set<Character> keys = map.keySet();

        for(char key : keys){
            if(map.get(key) > 0){
                return false;
            }
        }

        return true;
    }
}