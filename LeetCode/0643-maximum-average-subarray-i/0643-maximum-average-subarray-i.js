/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = -Infinity;
    let sofar = 0;
    let windowStart = 0;
    
    for(let windowEnd=windowStart; windowEnd<nums.length; windowEnd++){
        
        sofar += nums[windowEnd];
        
        if(windowEnd - windowStart === k-1){
            let avg = sofar/k;
            max = Math.max(max, avg);
            sofar -= nums[windowStart];
            windowStart++;
        }
    }
    return max;
    
};