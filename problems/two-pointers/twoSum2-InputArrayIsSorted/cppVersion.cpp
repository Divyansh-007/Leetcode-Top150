class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        vector<int> ans;
        map<int, int> store;
        store.insert({target-numbers[0], 0});
        
        for(int i = 1; i < numbers.size(); i++){
            if(store.contains(numbers[i])){
                ans.push_back(store[numbers[i]]+1);
                ans.push_back(i+1);
                return ans;
            }else{
                store.insert({target - numbers[i], i});
            }
        }
        return ans;
    }
};