class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let looped = [];
        for(const num of nums){
            if(looped.includes(num) && looped !== undefined){
                return true;
            }
            looped.push(num);
        }
        return false;
    }
}
