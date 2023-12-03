function wordPattern(pattern: string, s: string): boolean {
    let map1:Object = new Object()
    let map2:Object = new Object()
  
    let words:string[] = s.split(" ")
  
    if(pattern.length != words.length){
        return false
    }
  
    for(let i = 0; i < pattern.length; i++){
        let curr = pattern.charAt(i)
  
        if(!Object.keys(map1).includes(curr)){
            map1[curr] = words[i]
        }
  
        if(!Object.keys(map2).includes(words[i])){
            map2[words[i]] = curr
        }
  
        if(map1[curr] !== words[i] || map2[words[i]] !== curr){
            return false
        }
    }
    return true  
  };