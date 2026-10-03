class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if(intervals.length === 0)
            return [];

        //sort the list first
        let sorted = intervals.sort((a, b) => a[0] - b[0]);
        let final = [];
        final.push(sorted[0]);

        for(const interval of intervals){
            let first = interval[0];
            let second  = interval[1];
            let prev = final[final.length - 1][1];

            if(first <= prev){
                final[final.length - 1][1] = Math.max(second, prev)
            }else{
                final.push([first, second]);
            }
        }

        return final;

    }
}
