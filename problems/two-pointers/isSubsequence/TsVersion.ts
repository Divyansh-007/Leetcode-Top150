function isSubsequence(s: string, t: string): boolean {
    if(s.length < 1){
        return true
    }

    let i:number = 0

    for(let j:number = 0; j < t.length; j++){
        if(i < s.length && s.charAt(i) == t.charAt(j)){
            i++
        }
    }

    return i == s.length
};