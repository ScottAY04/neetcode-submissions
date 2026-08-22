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
            console.log(done.get(difference));
            if(done.get(difference) !== undefined){
                console.log('here');
                let final = [done.get(difference), i];
                return final.sort();
            }
            done.set(nums[i], i);
        }
        //console.log(done);
    }
}
