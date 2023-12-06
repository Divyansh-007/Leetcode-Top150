function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let map: Object = new Object()

    for (let i = 0; i < nums.length; i++) {
        let curr: number = nums[i]
        if (curr in map) {
            if (Math.abs(i - map[curr]) <= k) {
                return true
            }
        }
        map[curr] = i
    }

    return false
};