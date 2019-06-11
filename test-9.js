/**
 * 判断回文数
 * @url https://leetcode-cn.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  x = "" + x;
  if (x === x.split("").reverse().join("")) {
    return true;
  }
  return false;
};

// var x = 11;
// var x = 121;
// var x = -121;
// var x = 10;
var x = 123454321;

console.log(isPalindrome(x));
