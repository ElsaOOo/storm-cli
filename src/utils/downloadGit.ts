import downloadGit from "download-git-repo";

export const downloadLocal = async (projectName: string) => {
  // registry/templateName
  let api = "microsoft/TypeScript-React-Starter";
  return new Promise((resolve, reject) => {
    downloadGit(api, projectName, (err: any) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};
