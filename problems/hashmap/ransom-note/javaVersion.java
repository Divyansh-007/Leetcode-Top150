class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        HashMap<Character,Integer> map = new HashMap<>();

        for(int i = 0; i < magazine.length(); i++){
            char curr = magazine.charAt(i);
            if(map.containsKey(curr)){
                map.put(curr, map.get(curr) + 1);
                continue;
            }else{
                map.put(curr,1);
            }
        }

        for(int j = 0; j < ransomNote.length(); j++){
            char ch = ransomNote.charAt(j);

            if(!map.containsKey(ch)){
                return false;
            }else{
                int freq = map.get(ch);

                if(freq <= 0){
                    return false;
                }else{
                    map.put(ch,freq - 1);
                    continue;
                }
            }
        }

        return true;

    }
}