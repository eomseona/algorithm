/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let mid;
    while(nums[mid]!==target && left<=right){
        mid = Math.floor((right+left)/2);
        if(nums[mid] > target) right = mid - 1;
        else if(nums[mid] < target) left = mid + 1;
        else return mid;
    }
    return -1;
};