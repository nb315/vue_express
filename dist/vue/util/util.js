"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var util = {};
util.post = function (req, param, timeout, errorcallback) {
  if (timeout === undefined) {
    timeout = 60000;
  }
  return _axios2.default.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
    timeout: timeout
  }).post(req, "json=" + encodeURIComponent(encodeURIComponent((0, _stringify2.default)(param)))).then(function (res) {
    try {
      console.log(111111111111);
      console.log(res);
    } catch (e) {}
  }).catch(function (e) {
    console.log(e);
    if (errorcallback) errorcallback();
    /*if(null!=res && null!=res.data) {
        Message.error({content: "异常:" + res.data.msg})
    }*/
  }).finally(function (res) {
    loading();
  });
};
exports.default = util;
//# sourceMappingURL=util.js.map