/**
 * 两数之和
 * @param {*} nums 
 * @param {*} target 
 */
var twoSum = function (nums, target) {
  var json = {}, cache = [];
  for (var i = 0, len = nums.length; i < len; i++) {
    json[nums[i]] = i;
    for (var j in json) {
      if (json[j] != i) {
        if (Number(j) + nums[i] == target) {
          return [json[j], i];
        }
      } else {
        if (Number(j) + nums[i] == target) {
          cache.push(i);
        }
      }
    }
  }
  return cache;
}

// 输入：
// nums = [2, 7, 11, 15], 
// target = 9
// 输出：
// [0, 1]

// var nums = [2, 7, 11, 15];
// var nums = [11, 2, 15, 7];
// var nums = [3, 2, 4];
// var nums = [3, 2, 3];
// var nums = [0, 4, 3, 0];
var nums = [-3, 4, 3, 90];
var target = 0;

console.log(twoSum(nums, target));

