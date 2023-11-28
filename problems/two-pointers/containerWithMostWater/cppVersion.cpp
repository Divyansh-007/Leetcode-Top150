class Solution {
public:
    int maxArea(vector<int>& height) {
        int ans = 0;

        int min = 0;
        int max = height.size()-1;

        for(int i = 0; i < height.size(); i++){
            int area = 0;
            if(height[min] > height[max]){
                area = height[max] * (max - min);
            }else{
                area = height[min] * (max - min);
            }
            if(ans < area){
               ans = area;
            }
            if(height[min] > height[max]){
                max--;
            }else{
                min++;
            }
        }

        return ans;
    }
};