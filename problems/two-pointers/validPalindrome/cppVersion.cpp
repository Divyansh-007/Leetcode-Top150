class Solution {
public:
    bool isPalindrome(string s) {
        string a = "";
        string b = "";

        //lowercase
        transform(s.begin(), s.end(), s.begin(), ::tolower); 

        //removing space and special char
        for(auto x: s){
            if((int(char(x)) >= 97 && int(char(x)) <= 122) || (int(char(x)) >= 48 && int(char(x)) <= 57)) a += x;
        }

        b = a;
        // compare reverse
        reverse(a.begin(), a.end());

        cout << a << endl;
        cout << b;

        if(a == b){
            return true;
        }else{
            return false;
        }
    }
};