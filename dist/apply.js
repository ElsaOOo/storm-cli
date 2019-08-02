"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var apply = function apply(action) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  require("./".concat(action))(...args);
};

var _default = apply;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHBseS50cyJdLCJuYW1lcyI6WyJhcHBseSIsImFjdGlvbiIsImFyZ3MiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsTUFBRCxFQUF1QztBQUFBLG9DQUFuQkMsSUFBbUI7QUFBbkJBLElBQUFBLElBQW1CO0FBQUE7O0FBQ25EQyxFQUFBQSxPQUFPLGFBQU1GLE1BQU4sRUFBUCxDQUF1QixHQUFHQyxJQUExQjtBQUNELENBRkQ7O2VBSWVGLEsiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHBseSA9IChhY3Rpb246IHN0cmluZywgLi4uYXJnczogc3RyaW5nW10pID0+IHtcbiAgcmVxdWlyZShgLi8ke2FjdGlvbn1gKSguLi5hcmdzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwcGx5O1xuIl19