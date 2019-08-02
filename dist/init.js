"use strict";

var _chalk = _interopRequireDefault(require("chalk"));

var _inquirer = _interopRequireDefault(require("inquirer"));

var _ora = _interopRequireDefault(require("ora"));

var _util = require("util");

var _fs = _interopRequireDefault(require("fs"));

var _logSymbols = _interopRequireDefault(require("log-symbols"));

var _downloadGit = require("./utils/downloadGit");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var exist = (0, _util.promisify)(_fs.default.stat);

var init =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* (projectName) {
    if (!projectName) {
      console.log(_chalk.default.redBright.bold("请输入项目名称"));
      return;
    }

    try {
      var projectExist = yield exist(projectName);

      if (projectExist) {
        console.log(_chalk.default.redBright.bold("项目已存在！"));
      }
    } catch (error) {
      if (error.code === "ENOENT") {
        _inquirer.default.prompt([{
          name: "description",
          message: "Please enter the project description"
        }, {
          name: "author",
          message: "Please enter the project author"
        }]).then(
        /*#__PURE__*/
        function () {
          var _ref2 = _asyncToGenerator(function* (answer) {
            console.log(answer); // 下载模板 选择模板
            // 通过配置文件 获取模板信息

            var loading = (0, _ora.default)("downloading template...");
            loading.start();
            loading.color = "yellow";
            (0, _downloadGit.downloadLocal)(projectName).then(() => {
              loading.succeed();
              var fileName = "".concat(projectName, "/package.json");

              if (_fs.default.existsSync(fileName)) {
                var data = _fs.default.readFileSync(fileName).toString();

                var json = JSON.parse(data);
                json.name = projectName;
                json.author = answer.author;
                json.description = answer.description; // 修改项目文件夹中package.json文件

                _fs.default.writeFileSync(fileName, JSON.stringify(json, null, "\t"), "utf-8");

                console.log(_logSymbols.default.success, _chalk.default.green("Project initialization finished!"));
              }
            }, () => {
              loading.fail();
            });
          });

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      }
    }
  });

  return function init(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = init;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbml0LnRzIl0sIm5hbWVzIjpbImV4aXN0IiwiZnMiLCJzdGF0IiwiaW5pdCIsInByb2plY3ROYW1lIiwiY29uc29sZSIsImxvZyIsImNoYWxrIiwicmVkQnJpZ2h0IiwiYm9sZCIsInByb2plY3RFeGlzdCIsImVycm9yIiwiY29kZSIsImlucXVpcmVyIiwicHJvbXB0IiwibmFtZSIsIm1lc3NhZ2UiLCJ0aGVuIiwiYW5zd2VyIiwibG9hZGluZyIsInN0YXJ0IiwiY29sb3IiLCJzdWNjZWVkIiwiZmlsZU5hbWUiLCJleGlzdHNTeW5jIiwiZGF0YSIsInJlYWRGaWxlU3luYyIsInRvU3RyaW5nIiwianNvbiIsIkpTT04iLCJwYXJzZSIsImF1dGhvciIsImRlc2NyaXB0aW9uIiwid3JpdGVGaWxlU3luYyIsInN0cmluZ2lmeSIsInN5bWJvbCIsInN1Y2Nlc3MiLCJncmVlbiIsImZhaWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLEtBQUssR0FBRyxxQkFBVUMsWUFBR0MsSUFBYixDQUFkOztBQUVBLElBQU1DLElBQUk7QUFBQTtBQUFBO0FBQUEsK0JBQUcsV0FBT0MsV0FBUCxFQUErQjtBQUMxQyxRQUFJLENBQUNBLFdBQUwsRUFBa0I7QUFDaEJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxlQUFNQyxTQUFOLENBQWdCQyxJQUFoQixDQUFxQixTQUFyQixDQUFaO0FBQ0E7QUFDRDs7QUFDRCxRQUFJO0FBQ0YsVUFBTUMsWUFBWSxTQUFTVixLQUFLLENBQUNJLFdBQUQsQ0FBaEM7O0FBQ0EsVUFBSU0sWUFBSixFQUFrQjtBQUNoQkwsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGVBQU1DLFNBQU4sQ0FBZ0JDLElBQWhCLENBQXFCLFFBQXJCLENBQVo7QUFDRDtBQUNGLEtBTEQsQ0FLRSxPQUFPRSxLQUFQLEVBQWM7QUFDZCxVQUFJQSxLQUFLLENBQUNDLElBQU4sS0FBZSxRQUFuQixFQUE2QjtBQUMzQkMsMEJBQ0dDLE1BREgsQ0FDVSxDQUNOO0FBQ0VDLFVBQUFBLElBQUksRUFBRSxhQURSO0FBRUVDLFVBQUFBLE9BQU8sRUFBRTtBQUZYLFNBRE0sRUFLTjtBQUNFRCxVQUFBQSxJQUFJLEVBQUUsUUFEUjtBQUVFQyxVQUFBQSxPQUFPLEVBQUU7QUFGWCxTQUxNLENBRFYsRUFXR0MsSUFYSDtBQUFBO0FBQUE7QUFBQSx3Q0FXUSxXQUFNQyxNQUFOLEVBQWdCO0FBQ3BCYixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVksTUFBWixFQURvQixDQUVwQjtBQUNBOztBQUNBLGdCQUFJQyxPQUFPLEdBQUcsa0JBQUkseUJBQUosQ0FBZDtBQUNBQSxZQUFBQSxPQUFPLENBQUNDLEtBQVI7QUFDQUQsWUFBQUEsT0FBTyxDQUFDRSxLQUFSLEdBQWdCLFFBQWhCO0FBQ0EsNENBQWNqQixXQUFkLEVBQTJCYSxJQUEzQixDQUNFLE1BQU07QUFDSkUsY0FBQUEsT0FBTyxDQUFDRyxPQUFSO0FBQ0Esa0JBQU1DLFFBQVEsYUFBTW5CLFdBQU4sa0JBQWQ7O0FBQ0Esa0JBQUlILFlBQUd1QixVQUFILENBQWNELFFBQWQsQ0FBSixFQUE2QjtBQUMzQixvQkFBTUUsSUFBSSxHQUFHeEIsWUFBR3lCLFlBQUgsQ0FBZ0JILFFBQWhCLEVBQTBCSSxRQUExQixFQUFiOztBQUNBLG9CQUFJQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxJQUFYLENBQVg7QUFDQUcsZ0JBQUFBLElBQUksQ0FBQ2IsSUFBTCxHQUFZWCxXQUFaO0FBQ0F3QixnQkFBQUEsSUFBSSxDQUFDRyxNQUFMLEdBQWNiLE1BQU0sQ0FBQ2EsTUFBckI7QUFDQUgsZ0JBQUFBLElBQUksQ0FBQ0ksV0FBTCxHQUFtQmQsTUFBTSxDQUFDYyxXQUExQixDQUwyQixDQU0zQjs7QUFDQS9CLDRCQUFHZ0MsYUFBSCxDQUNFVixRQURGLEVBRUVNLElBQUksQ0FBQ0ssU0FBTCxDQUFlTixJQUFmLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCLENBRkYsRUFHRSxPQUhGOztBQUtBdkIsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUNFNkIsb0JBQU9DLE9BRFQsRUFFRTdCLGVBQU04QixLQUFOLENBQVksa0NBQVosQ0FGRjtBQUlEO0FBQ0YsYUFyQkgsRUFzQkUsTUFBTTtBQUNKbEIsY0FBQUEsT0FBTyxDQUFDbUIsSUFBUjtBQUNELGFBeEJIO0FBMEJELFdBNUNIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNkNEO0FBQ0Y7QUFDRixHQTNEUzs7QUFBQSxrQkFBSm5DLElBQUk7QUFBQTtBQUFBO0FBQUEsR0FBVjs7QUE2REFvQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJyQyxJQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFsayBmcm9tIFwiY2hhbGtcIjtcbmltcG9ydCBpbnF1aXJlciBmcm9tIFwiaW5xdWlyZXJcIjtcbmltcG9ydCBvcmEgZnJvbSBcIm9yYVwiO1xuaW1wb3J0IHsgcHJvbWlzaWZ5IH0gZnJvbSBcInV0aWxcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBzeW1ib2wgZnJvbSBcImxvZy1zeW1ib2xzXCI7XG5pbXBvcnQgeyBkb3dubG9hZExvY2FsIH0gZnJvbSBcIi4vdXRpbHMvZG93bmxvYWRHaXRcIjtcblxuY29uc3QgZXhpc3QgPSBwcm9taXNpZnkoZnMuc3RhdCk7XG5cbmNvbnN0IGluaXQgPSBhc3luYyAocHJvamVjdE5hbWU6IHN0cmluZykgPT4ge1xuICBpZiAoIXByb2plY3ROYW1lKSB7XG4gICAgY29uc29sZS5sb2coY2hhbGsucmVkQnJpZ2h0LmJvbGQoXCLor7fovpPlhaXpobnnm67lkI3np7BcIikpO1xuICAgIHJldHVybjtcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IHByb2plY3RFeGlzdCA9IGF3YWl0IGV4aXN0KHByb2plY3ROYW1lKTtcbiAgICBpZiAocHJvamVjdEV4aXN0KSB7XG4gICAgICBjb25zb2xlLmxvZyhjaGFsay5yZWRCcmlnaHQuYm9sZChcIumhueebruW3suWtmOWcqO+8gVwiKSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvci5jb2RlID09PSBcIkVOT0VOVFwiKSB7XG4gICAgICBpbnF1aXJlclxuICAgICAgICAucHJvbXB0KFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBlbnRlciB0aGUgcHJvamVjdCBkZXNjcmlwdGlvblwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcImF1dGhvclwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgdGhlIHByb2plY3QgYXV0aG9yXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0pXG4gICAgICAgIC50aGVuKGFzeW5jIGFuc3dlciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYW5zd2VyKTtcbiAgICAgICAgICAvLyDkuIvovb3mqKHmnb8g6YCJ5oup5qih5p2/XG4gICAgICAgICAgLy8g6YCa6L+H6YWN572u5paH5Lu2IOiOt+WPluaooeadv+S/oeaBr1xuICAgICAgICAgIGxldCBsb2FkaW5nID0gb3JhKFwiZG93bmxvYWRpbmcgdGVtcGxhdGUuLi5cIik7XG4gICAgICAgICAgbG9hZGluZy5zdGFydCgpO1xuICAgICAgICAgIGxvYWRpbmcuY29sb3IgPSBcInllbGxvd1wiO1xuICAgICAgICAgIGRvd25sb2FkTG9jYWwocHJvamVjdE5hbWUpLnRoZW4oXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIGxvYWRpbmcuc3VjY2VlZCgpO1xuICAgICAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IGAke3Byb2plY3ROYW1lfS9wYWNrYWdlLmpzb25gO1xuICAgICAgICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGZpbGVOYW1lKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgICAgICBqc29uLm5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgICAgICAgICBqc29uLmF1dGhvciA9IGFuc3dlci5hdXRob3I7XG4gICAgICAgICAgICAgICAganNvbi5kZXNjcmlwdGlvbiA9IGFuc3dlci5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAvLyDkv67mlLnpobnnm67mlofku7blpLnkuK1wYWNrYWdlLmpzb27mlofku7ZcbiAgICAgICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKFxuICAgICAgICAgICAgICAgICAgZmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCBcIlxcdFwiKSxcbiAgICAgICAgICAgICAgICAgIFwidXRmLThcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICBzeW1ib2wuc3VjY2VzcyxcbiAgICAgICAgICAgICAgICAgIGNoYWxrLmdyZWVuKFwiUHJvamVjdCBpbml0aWFsaXphdGlvbiBmaW5pc2hlZCFcIilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICBsb2FkaW5nLmZhaWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdDtcbiJdfQ==