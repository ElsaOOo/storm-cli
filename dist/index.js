"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _chalk = _interopRequireDefault(require("chalk"));

var _constants = require("./utils/constants");

var _apply = _interopRequireDefault(require("./apply"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var program = new _commander.default.Command(); // helper funcs

function greenNote(txt) {
  return _chalk.default.greenBright(txt);
}

program.command("init").description("storm init").action(() => {
  (0, _apply.default)("init", ...process.argv.slice(3));
});
program.version(_constants.VERSION, "-v --version");
program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp(greenNote);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJwcm9ncmFtIiwiY29tbWFuZGVyIiwiQ29tbWFuZCIsImdyZWVuTm90ZSIsInR4dCIsImNoYWxrIiwiZ3JlZW5CcmlnaHQiLCJjb21tYW5kIiwiZGVzY3JpcHRpb24iLCJhY3Rpb24iLCJwcm9jZXNzIiwiYXJndiIsInNsaWNlIiwidmVyc2lvbiIsIlZFUlNJT04iLCJwYXJzZSIsImxlbmd0aCIsIm91dHB1dEhlbHAiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsSUFBSUMsbUJBQVVDLE9BQWQsRUFBaEIsQyxDQUVBOztBQUNBLFNBQVNDLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdDO0FBQ3RDLFNBQU9DLGVBQU1DLFdBQU4sQ0FBa0JGLEdBQWxCLENBQVA7QUFDRDs7QUFFREosT0FBTyxDQUNKTyxPQURILENBQ1csTUFEWCxFQUVHQyxXQUZILENBRWUsWUFGZixFQUdHQyxNQUhILENBR1UsTUFBTTtBQUNaLHNCQUFNLE1BQU4sRUFBYyxHQUFHQyxPQUFPLENBQUNDLElBQVIsQ0FBYUMsS0FBYixDQUFtQixDQUFuQixDQUFqQjtBQUNELENBTEg7QUFPQVosT0FBTyxDQUFDYSxPQUFSLENBQWdCQyxrQkFBaEIsRUFBeUIsY0FBekI7QUFFQWQsT0FBTyxDQUFDZSxLQUFSLENBQWNMLE9BQU8sQ0FBQ0MsSUFBdEI7O0FBRUEsSUFBSSxDQUFDRCxPQUFPLENBQUNDLElBQVIsQ0FBYUMsS0FBYixDQUFtQixDQUFuQixFQUFzQkksTUFBM0IsRUFBbUM7QUFDakNoQixFQUFBQSxPQUFPLENBQUNpQixVQUFSLENBQW1CZCxTQUFuQjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbW1hbmRlciBmcm9tIFwiY29tbWFuZGVyXCI7XG5pbXBvcnQgY2hhbGsgZnJvbSBcImNoYWxrXCI7XG5pbXBvcnQgeyBWRVJTSU9OIH0gZnJvbSBcIi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgYXBwbHkgZnJvbSBcIi4vYXBwbHlcIjtcblxuY29uc3QgcHJvZ3JhbSA9IG5ldyBjb21tYW5kZXIuQ29tbWFuZCgpO1xuXG4vLyBoZWxwZXIgZnVuY3NcbmZ1bmN0aW9uIGdyZWVuTm90ZSh0eHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBjaGFsay5ncmVlbkJyaWdodCh0eHQpO1xufVxuXG5wcm9ncmFtXG4gIC5jb21tYW5kKFwiaW5pdFwiKVxuICAuZGVzY3JpcHRpb24oXCJzdG9ybSBpbml0XCIpXG4gIC5hY3Rpb24oKCkgPT4ge1xuICAgIGFwcGx5KFwiaW5pdFwiLCAuLi5wcm9jZXNzLmFyZ3Yuc2xpY2UoMykpO1xuICB9KTtcblxucHJvZ3JhbS52ZXJzaW9uKFZFUlNJT04sIFwiLXYgLS12ZXJzaW9uXCIpO1xuXG5wcm9ncmFtLnBhcnNlKHByb2Nlc3MuYXJndik7XG5cbmlmICghcHJvY2Vzcy5hcmd2LnNsaWNlKDIpLmxlbmd0aCkge1xuICBwcm9ncmFtLm91dHB1dEhlbHAoZ3JlZW5Ob3RlKTtcbn1cbiJdfQ==