class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.has(key)){
            return -1;
        }

        //sets it up as the most recent used
        let value = this.cache.get(key);
        this.cache.delete(key)
        this.cache.set(key, value);
        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.get(key)){
            this.cache.delete(key);
            this.cache.set(key,value);
        }else{
            this.cache.set(key, value);
        }        

        if(this.cache.size > this.capacity){
            let oldestKey = this.cache.entries().next().value[0];
            this.cache.delete(oldestKey);
        }
    }
}
