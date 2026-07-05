class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let current = 0;
        let maxCount = 0;

        for (let num of nums ){
            if ( num === 1){
                current++
            if (current > maxCount){
                maxCount = current 
            }
            }
            else {
                current = 0;
            }
        }

     return maxCount;
    }
}
