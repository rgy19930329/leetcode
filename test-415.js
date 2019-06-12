// 字符串数组转换为整数数组
Array.prototype.toInt = function () {
  for (var i = 0; i < this.length; i++) {
    this[i] = parseInt(this[i]);
  }
  return this;
}
// 从数组末尾起移除0，直到非0或者只剩一位时停止
Array.prototype.removeZero = function () {
  var flag = true,
    len = this.length;
  for (var i = len - 1; i >= 0; i--) {
    if (this[i] !== 0) {
      flag = false;
    }
    if (flag && this[i] === 0 && this.length >= 2) {
      this.splice(i, 1);
    }
  }
  return this;
}

/**
 * 字符串相加
 * @url https://leetcode-cn.com/problems/add-strings/
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  var ax = String(num1).split('').reverse().toInt();
  var bx = String(num2).split('').reverse().toInt();
  var len = (ax.length > bx.length) ? ax.length : bx.length;
  var rx = [0],
    slen, x;

  if (ax.length > bx.length) {
    slen = ax.length - bx.length;
    for (x = 0; x < slen; x++) {
      bx.push(0);
    }
  } else {
    slen = bx.length - ax.length;
    for (x = 0; x < slen; x++) {
      ax.push(0);
    }
  }

  for (var i = 0; i < len; i++) {
    var r = ax[i] + bx[i] + rx[i];
    var s = parseInt(r / 10);
    r = r % 10;
    rx[i] = r;
    rx[i + 1] = s;
  }

  rx = rx.removeZero().reverse().join("");
  return rx;
};

console.log(addStrings("1998", "389"));
console.log(addStrings("0", "0"));
