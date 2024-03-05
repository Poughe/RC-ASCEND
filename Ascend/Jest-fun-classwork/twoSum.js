function twoSum(nums, target) {
    map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if(map.get(num) === undefined) map.set(target-num, i);
        else return [map.get(num),i];
    }

}

module.exports = twoSum