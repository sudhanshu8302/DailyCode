/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * Time comp: O(n)
 * Space comp: O(n)
 */
var twoSum = function(nums, target) {
    let myMap = new Map();

    for(var i=0; i<nums.length; i++){
        const comp = target - nums[i];
        if(myMap.has(comp)){
            return [i, myMap.get(comp)];
        }
        myMap.set(nums[i], i);
    }
};