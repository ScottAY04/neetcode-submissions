class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let first = 0
        let last = numbers.length - 1

        while(first < last){
            if(numbers[first] + numbers[last] === target){
                return [first + 1, last + 1];
            }

            if(numbers[first] + numbers[last] < target){
                first ++;
            }else{
                last--;
            }
        }
    }
}
