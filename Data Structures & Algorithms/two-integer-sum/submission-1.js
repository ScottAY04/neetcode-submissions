class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let done = new Map();
        done.set(nums[0], 0);
        for(let i = 1; i<nums.length;i++){
            let difference = target - nums[i];
            if(done.get(difference) !== undefined){
                let final = [done.get(difference), i];
                return final.sort();
            }
            done.set(nums[i], i);
        }
    }
}
