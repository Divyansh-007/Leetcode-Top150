function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length){
        return false
    }

    let map:Object = new Object()

    for(let i = 0; i < s.length; i++){
        let curr = s.charAt(i)
        if(Object.keys(map).includes(curr)){
            map[curr] += 1
            continue
        }
        map[curr] = 1
    }

    for(let j = 0; j < t.length; j++){
        let curr = t.charAt(j);
        if(Object.keys(map).includes(curr)){
            map[curr] -= 1
            continue
        }else{
            return false
        }
    }

    let keys = Object.keys(map)

    for(let k = 0; k < keys.length; k++){
        if(map[keys[k]] > 0){
            return false
        }
    }
    
    return true
};