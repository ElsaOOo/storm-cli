import commander from "commander";
import chalk from "chalk";
import { VERSION } from "./utils/constants";
import apply from "./apply";

const program = new commander.Command();

// helper funcs
function greenNote(txt: string): string {
  return chalk.greenBright(txt);
}

program
  .command("init")
  .description("storm init")
  .action(() => {
    apply("init", ...process.argv.slice(3));
  });

program.version(VERSION, "-v --version");

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp(greenNote);
}
