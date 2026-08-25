class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let closedToOpen = new Map();
        closedToOpen.set('}', '{');
        closedToOpen.set(']', '[');
        closedToOpen.set(')', '(');

        for(const p of s){
            if(stack.length === 0 && closedToOpen.has(p)){
                return false;
            }

            if(!closedToOpen.has(p)){
                stack.push(p);
            }else{
                if(stack[stack.length - 1] === closedToOpen.get(p)){
                    stack.pop();
                }else{
                    return false;
                }
            }
        }

        if(stack.length === 0){
            return true;
        }else{
            return false;
        }
    }
}
