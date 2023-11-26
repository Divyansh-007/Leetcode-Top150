function romanToInt(s: string): number {
    let map:Object = new Object()

    map['I'] = 1
    map['V'] = 5
    map['X'] = 10
    map['L'] = 50
    map['C'] = 100
    map['D'] = 500
    map['M'] = 1000

    let n:number = s.length
    let ans:number = 0
    let prev:number = map[s.charAt(n - 1)]
    ans += prev

    for(let i:number = n - 2; i >= 0; i--){
        let currVal:number = map[s.charAt(i)]

        if(currVal < prev){
            ans -= currVal
        }else{
            ans += currVal
        }

        prev = currVal
    }

    return ans
};