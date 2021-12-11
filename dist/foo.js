'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.sum = void 0;
const sum = function () {
  const a = [];
  for (let _i = 0; _i < arguments.length; _i++) {
    a[_i] = arguments[_i];
  }
  return a.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
exports.sum = sum;
// # sourceMappingURL=foo.js.map
