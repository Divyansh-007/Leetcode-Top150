function longestCommonPrefix(strs: string[]): string {
    strs.sort();
    let s1:string = strs[0]
    let s2:string = strs[strs.length - 1]
    let i:number = 0
    let j:number = 0
    let ans:string = ""

    while(i < s1.length && j < s2.length){
        if(s1.charAt(i) == s2.charAt(j)){
            ans += s1.charAt(i)
            i++
            j++
        }else{
            break
        }
    }

    return ans
};