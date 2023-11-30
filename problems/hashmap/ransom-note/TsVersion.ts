function canConstruct(ransomNote: string, magazine: string): boolean {
    let map:Object = new Object()

    for(let i = 0; i < magazine.length; i++){
        let curr = magazine.charAt(i)
        if(Object.keys(map).includes(curr)){
            map[curr] += 1
            continue
        }else{
            map[curr] = 1
        }
    }

    for(let j = 0; j < ransomNote.length; j++){
        let ch = ransomNote.charAt(j)
        if(!Object.keys(map).includes(ch)){
            return false
        }else{
            let freq:number = map[ch]

            if(freq <= 0){
                return false
            }else{
                map[ch] -= 1
            }
        }
    }

    return true
};