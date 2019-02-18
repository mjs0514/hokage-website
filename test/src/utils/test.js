// var exports = module.exports = {};

exports.m1 = function(){
  return "hello";
}
exports.m2 = function(){
  return "halo";
}

module.exports = {
  m3: function(){
    return "nice to meet you";
  },
  m4: function(){
    return "good bye";
  }
}
//
// define({
//   "m1": function(){
//     return 'm1 test';
//   }
// });
//
// define(function() {
//   return {
//     add(a, b) {
//       return a + b;
//     },
//     subtract(a, b) {
//       return a - b;
//     }
//   };
// });
//
define(function (require, exports, module) {
     // var a = require('a'),
     //     b = require('b');

     module.exports = {
       action: function(){
         return 'action';
       }
     }
     // exports.action = function(){
     //   return 'action';
     // }
});
