class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let temp = [];
        for(const str of strs){
            temp.push(`${str.length}#${str}`)
        }
        console.log(temp.join(""))
        return temp.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let final = [];
        let i = 0;
        while(i < str.length){
            let j = i;
            while(str[j] !== '#'){
                j++
            }
            let length = parseInt(str.substring(i,j));
            i = j + 1;
            j = i + length;
            final.push(str.substring(i, j));
            i = j;
        }
        return final;
    }
}
