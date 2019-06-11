/**
 * 驼峰式匹配
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
  pattern = `^[a-z]*${pattern.split("").join("[a-z]*")}[a-z]*$`;
  return queries.map(s => {
    return s.match(new RegExp(pattern)) ? true : false;
  });
};

// 输入：queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB"
// 输出：[true,false,true,true,false]

// 输入：queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBa"
// 输出：[true,false,true,false,false]

// 输入：queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBaT"
// 输出：[false,true,false,false,false]

// 输入：queries = ["CompetitiveProgramming","CounterPick","ControlPanel"], pattern = "CooP"
// 输出：[false, false, true]

// 输入：queries = ["aksvbjLiknuTzqon","ksvjLimflkpnTzqn","mmkasvjLiknTxzqn","ksvjLiurknTzzqbn","ksvsjLctikgnTzqn","knzsvzjLiknTszqn"], pattern = "ksvjLiknTzqn"
// 输出：[false,true,false,true,false,false]

// var queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"];
// var pattern = "FB";

var queries = ["CompetitiveProgramming","CounterPick","ControlPanel"];
var pattern = "CooP";

// var queries = ["aksvbjLiknuTzqon","ksvjLimflkpnTzqn","mmkasvjLiknTxzqn","ksvjLiurknTzzqbn","ksvsjLctikgnTzqn","knzsvzjLiknTszqn"];
// pattern = "ksvjLiknTzqn";

console.log(camelMatch(queries, pattern));
