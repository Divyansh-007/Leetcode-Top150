function removeDuplicates(nums: number[]): number {
    let k:number = 0
    let prev:number = nums[0]
    
    for(let i = 1; i < nums.length; i++){
        if(nums[i] == prev){
            continue;
        }else{
            nums[k] = prev
            prev = nums[i]
            k++
        }
    }

    nums[k] = prev
    k++
    return k
};