function twoSum(nums: number[], target: number): number[] {
    let map:Object = new Object()
    let ans:number[] = []

    for(let i = 0; i < nums.length; i++){
        let curr:number = nums[i]
        if(Object.keys(map).includes("" + (target - curr))){
            ans.push(i)
            ans.push(map[target - curr])
            break
        }
        map[curr] = i
    }

    return ans
};