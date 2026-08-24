class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const topK = [];
        const counts = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);
        //console.log(freq);

        for (const num of nums) {
            counts[num] = (counts[num] || 0) + 1;
        }

        //console.log(counts)

        for (const num in counts) {
            const count = counts[num];
            freq[count].push(num);
        }
        console.log(freq);

        for (let i = freq.length - 1; i >= 0; i--) {
            const currentFreq = freq[i];
            for (const num of currentFreq) {
                topK.push(num);
                console.log(num);
                if (topK.length === k) {
                    return topK;
                }
            }
        }

        return topK;
    }
}
