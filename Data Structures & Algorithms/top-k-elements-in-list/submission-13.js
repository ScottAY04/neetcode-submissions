class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let counter = new Map();
        let temp = new Array(nums.length+1);
        let final = [];

        for(let i = 0;i<nums.length;i++){
            counter.set(nums[i], 0);
        }

        for(const num of nums){
            counter.set(num, counter.get(num)+ 1)
        }

        for(const [key, value] of counter){
            if(!temp[value]){
                temp[value] = [key];
                continue;
            }

            temp[value].push(key);
        }
        console.log(counter)
        console.log(temp)
        temp = temp.filter((num) => !isNaN(num) || Array.isArray(num));
        console.log(temp);

        let end = temp.length - 1;
        while(final.length !== k){
            if(Array.isArray(temp[end])){
                for(let i = 0; i<temp[end].length;i++){
                    final.push(temp[end][i])
                }
                end--
            }else{
                final.push(temp[end]);
                end--;
            }
        }
        return final;
    }
}
