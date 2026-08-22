class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let final = [];
        let sortedMap = new Map();

        for(let i = 0;i<strs.length;i++){
            let sorted = strs[i].split('').sort().join('');

            //sets up the final list length
            if(final.length === 0){
                sortedMap.set(sorted, final.length)
                final.push([strs[i]]);
                continue;
            }

            //if the map has it it gets the index and adds to the final
            if(!sortedMap.has(sorted)){
                sortedMap.set(sorted, final.length);
                final.push([strs[i]]);
                continue;
            }

            final[sortedMap.get(sorted)].push(strs[i]);
        }
        return final;
    }
}
