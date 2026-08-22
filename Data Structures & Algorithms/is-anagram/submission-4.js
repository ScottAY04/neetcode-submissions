class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.split("").length !== t.split("").length){
            return false;
        }
        const wordOne = {};
        const wordTwo = {};
        for(const letter of s.split("")){
            if(!wordOne[letter]){
                wordOne[letter] = 1;
            }else{
                wordOne[letter] += 1;
            }
        }
        for(const letter of t.split("")){
            if(!wordTwo[letter]){
                wordTwo[letter] = 1;
            }else{
                wordTwo[letter] += 1;
            }
        }

        console.log(wordOne);
        console.log(wordTwo);
        for(const letter in wordOne){
            if(wordOne[letter] !== wordTwo[letter]){
                return false;
            }
        }
        for(const letter in wordTwo){
            if(wordTwo[letter] !== wordTwo[letter]){
                return false;
            }
        }
        return true;
    }
}
