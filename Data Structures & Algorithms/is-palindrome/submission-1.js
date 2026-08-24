class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let normal = s.split(' ').join('').replace(/[^\w]|_/g, "").toLowerCase();
        let reverse = normal.split('').reverse().join('');
        if(normal === reverse){
            return true;
        }else{
            return false;
        }
    }
}
