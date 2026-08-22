class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let done = new Map();
        for(let i = 0; i<nums.length;i++){
            let difference = target - nums[i];
            if(done.has(difference)){
                return [done.get(difference), i];
            }
            done.set(nums[i], i);
        }
    }
}
