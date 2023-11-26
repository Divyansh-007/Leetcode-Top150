class Solution {
    public int romanToInt(String s) {
        HashMap<Character,Integer> map = new HashMap<>();

        map.put('I',1);
        map.put('V',5);
        map.put('X',10);
        map.put('L',50);
        map.put('C',100);
        map.put('D',500);
        map.put('M',1000);

        int ans = 0;
        int n = s.length();
        int prev = map.get(s.charAt(n - 1));
        ans += prev;

        for(int i = n - 2; i >= 0; i--){
            char curr = s.charAt(i);
            int currVal = map.get(curr);

            if(currVal < prev){
                ans -= currVal;
            }else{
                ans += currVal;
            }

            prev = currVal;
        }

        return ans;
    }
}