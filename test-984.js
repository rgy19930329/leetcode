/**
 * 不含 AAA 或 BBB 的字符串
 * @url https://leetcode-cn.com/problems/string-without-aaa-or-bbb/
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
  if (A > 2 * B + 2 || B > 2 * A + 2) {
    return "input error";
  }
  var S = "";
  if (A >= B) {
    var E = A - B - 1;
    for (var i = 0; i < E; i++) {
      if (A >= 2 && B >= 1) {
        S = S + "aab";
        A = A - 2;
        B = B - 1;
      }
    }
  } else {
    var E = B - A - 1;
    for (var i = 0; i < E; i++) {
      if (B >=2 && A >=1) {
        S = S + "bba";
        B = B - 2;
        A = A - 1;
      }
    }
  }
  var U = Math.min(A, B);
  for (var j = 0; j < U; j++) {
    S = U === A ? S + "ab" : S + "ba";
    B = B - 1;
    A = A - 1;
  }
  for (var t = 0; t < A; t++) {
    S = S + "a";
  }
  for (var s = 0; s < B; s++) {
    S = S + "b";
  }
  return S;
};

// 输入：A = 1, B = 2
// 输出："abb"

// 输入：A = 4, B = 1
// 输出："aabaa"

// 输入：A = 4, B = 2
// 输出："ababaa"

// 输入：A = 4, B = 3
// 输出："abababa"

// 输入：A = 2, B = 6
// 输出："bbabbabb"

// 输入：A = 3, B = 8
// 输出："bbabbabbabb"

// 输入：A = 2, B = 5
// 输出："bbabbab"

// 输入：A = 27, B = 33
// 输出："bbabbabbabbabbababababababababababababababababababababababab"

// var A = 1, B = 2;
// var A = 4, B = 1;
var A = 4, B = 2;
// var A = 4, B = 3;
// var A = 4, B = 4;
// var A = 2, B = 5;
// var A = 4, B = 7;
// var A = 27, B = 33;

console.log(strWithout3a3b(A, B));

