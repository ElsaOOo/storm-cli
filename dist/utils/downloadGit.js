"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadLocal = void 0;

var _downloadGitRepo = _interopRequireDefault(require("download-git-repo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var downloadLocal =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* (projectName) {
    // registry/templateName
    var api = "microsoft/TypeScript-React-Starter";
    return new Promise((resolve, reject) => {
      (0, _downloadGitRepo.default)(api, projectName, err => {
        if (err) {
          reject(err);
        }

        resolve();
      });
    });
  });

  return function downloadLocal(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.downloadLocal = downloadLocal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9kb3dubG9hZEdpdC50cyJdLCJuYW1lcyI6WyJkb3dubG9hZExvY2FsIiwicHJvamVjdE5hbWUiLCJhcGkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztBQUVPLElBQU1BLGFBQWE7QUFBQTtBQUFBO0FBQUEsK0JBQUcsV0FBT0MsV0FBUCxFQUErQjtBQUMxRDtBQUNBLFFBQUlDLEdBQUcsR0FBRyxvQ0FBVjtBQUNBLFdBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUN0QyxvQ0FBWUgsR0FBWixFQUFpQkQsV0FBakIsRUFBK0JLLEdBQUQsSUFBYztBQUMxQyxZQUFJQSxHQUFKLEVBQVM7QUFDUEQsVUFBQUEsTUFBTSxDQUFDQyxHQUFELENBQU47QUFDRDs7QUFDREYsUUFBQUEsT0FBTztBQUNSLE9BTEQ7QUFNRCxLQVBNLENBQVA7QUFRRCxHQVh5Qjs7QUFBQSxrQkFBYkosYUFBYTtBQUFBO0FBQUE7QUFBQSxHQUFuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkb3dubG9hZEdpdCBmcm9tIFwiZG93bmxvYWQtZ2l0LXJlcG9cIjtcblxuZXhwb3J0IGNvbnN0IGRvd25sb2FkTG9jYWwgPSBhc3luYyAocHJvamVjdE5hbWU6IHN0cmluZykgPT4ge1xuICAvLyByZWdpc3RyeS90ZW1wbGF0ZU5hbWVcbiAgbGV0IGFwaSA9IFwibWljcm9zb2Z0L1R5cGVTY3JpcHQtUmVhY3QtU3RhcnRlclwiO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGRvd25sb2FkR2l0KGFwaSwgcHJvamVjdE5hbWUsIChlcnI6IGFueSkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuIl19