/**
 * 整数反转
 * @url https://leetcode-cn.com/problems/reverse-integer/
 * @param {*} x 
 */
var reverse = function(x) {
  if (x >= 0) {
    x = +("" + x).split("").reverse().join("");
  } else {
    x = -(+("" + (0 - x)).split("").reverse().join(""));
  }
  if (x < -Math.pow(2, 31) || x > Math.pow(2, 31) - 1) {
    return 0;
  }
  return x;
};

// var num = 1534236469;
var num = 123;

console.log(reverse(num));
