function majorityElement(nums: number[]): number {
    let freq:Object = {}
    
    for(let i = 0; i < nums.length; i++){
        let curr = nums[i]
        if(curr in freq){
            freq[curr] += 1
            continue; 
        }

        freq[curr] = 1
    }

    let keys = Object.keys(freq)

    let ans:number = -1

    for(let j = 0; j < keys.length; j++){
        if(freq[keys[j]] > (nums.length / 2)){
            ans = (Number)(keys[j])
        }
    }
    return ans
};