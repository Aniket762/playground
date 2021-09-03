const { exec } = require("child_process");

const executePy = (filepath) => {
  return new Promise((resolve, reject) => {
    // exec runs 2 child process together
    exec(`python ${filepath} `, (error, stdout, stderr) => {
      error && reject({ error, stderr });
      stderr && reject(stderr);
      resolve(stdout);
    });
  });
};

module.exports = {
  executePy,
};
