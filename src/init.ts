import chalk from "chalk";
import inquirer from "inquirer";
import ora from "ora";
import { promisify } from "util";
import fs from "fs";
import symbol from "log-symbols";
import { downloadLocal } from "./utils/downloadGit";

const exist = promisify(fs.stat);

const init = async (projectName: string) => {
  if (!projectName) {
    console.log(chalk.redBright.bold("请输入项目名称"));
    return;
  }
  try {
    const projectExist = await exist(projectName);
    if (projectExist) {
      console.log(chalk.redBright.bold("项目已存在！"));
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      inquirer
        .prompt([
          {
            name: "description",
            message: "Please enter the project description"
          },
          {
            name: "author",
            message: "Please enter the project author"
          }
        ])
        .then(async answer => {
          console.log(answer);
          // 下载模板 选择模板
          // 通过配置文件 获取模板信息
          let loading = ora("downloading template...");
          loading.start();
          loading.color = "yellow";
          downloadLocal(projectName).then(
            () => {
              loading.succeed();
              const fileName = `${projectName}/package.json`;
              if (fs.existsSync(fileName)) {
                const data = fs.readFileSync(fileName).toString();
                let json = JSON.parse(data);
                json.name = projectName;
                json.author = answer.author;
                json.description = answer.description;
                // 修改项目文件夹中package.json文件
                fs.writeFileSync(
                  fileName,
                  JSON.stringify(json, null, "\t"),
                  "utf-8"
                );
                console.log(
                  symbol.success,
                  chalk.green("Project initialization finished!")
                );
              }
            },
            () => {
              loading.fail();
            }
          );
        });
    }
  }
};

module.exports = init;
