/**
 * Z字形变换
 * @url https://leetcode-cn.com/problems/zigzag-conversion/
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  var groupLen = 2 * numRows - 2;
  var groups = [];
  var gs = s.split("");
  for (var i = 0; i < gs.length; i = i + groupLen) {
    var ts = gs.slice(i, i + numRows);
    var tes = gs.slice(i + numRows, i + groupLen);
    groups.push(ts);
    for (var j = 0; j < tes.length; j++) {
      var te = [tes[j]];
      for (var n = 0; n < numRows; n++) {
        if (n < numRows - j - 2) {
          te.unshift("*");
        } else if (n > numRows - j - 2) {
          te.push("*");
        }
      }
      groups.push(te);
    }
  }
  var res = [];
  for (var x = 0; x < groups[0].length; x++) {
    res[x] = [];
    for (var y = 0; y < groups.length; y++) {
      res[x][y] = "*";
    }
  }
  for (var a = 0; a < groups.length; a++) {
    for (var b = 0; b < groups[a].length; b++) {
      res[b][a] = groups[a][b];
    }
  }
  res = res.map(item => item.join("").replace(/\*/g, ""));
  return res.join("");
};

var s = "LEETCODEISHIRING";
var numRows = 3;

// L   C   I   R
// E T O E S I I G
// E   D   H   N

// L     D     R
// E   O E   I I
// E C   I H   N
// T     S     G

console.log(convert(s, numRows));
