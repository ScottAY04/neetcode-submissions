class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sorted = nums.sort((a, b) => a - b);
        let triplets = [];

        for (let i = 0; i < sorted.length - 2; i++) {
            // Skip duplicate i values
            if (i > 0 && sorted[i] === sorted[i - 1]) {
                continue;
            }

            let first = i + 1;
            let last = sorted.length - 1;

            while (first < last) {
                let sum = sorted[i] + sorted[first] + sorted[last];

                if (sum < 0) {
                    first++;
                } else if (sum > 0) {
                    last--;
                } else {
                    triplets.push([sorted[i],sorted[first],sorted[last]]);
                    while (first < last && sorted[first] === sorted[first + 1]) {
                        first++;
                    }
                    while (first < last &&sorted[last] === sorted[last - 1]) {
                        last--;
                    }

                    first++;
                    last--;
                }
            }
        }

        return triplets;
    }
}
