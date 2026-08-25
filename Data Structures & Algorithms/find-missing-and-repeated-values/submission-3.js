class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        let map = new Map();
        let count = 0;
        let answer = [];
        //loops through the array of arrays
        for(const array of grid){
            //loops through the index of arrays
            for(const index of array){
                if(map.has(index)){
                    answer.push(index);
                    count++;
                }else{
                    map.set(index, 1);
                    count++;
                }
            }
        }
        for(let i = 1;i<count+1;i++){
            if(!map.has(i)){
                answer.push(i)
            }
        }

        return answer;
    }
}
