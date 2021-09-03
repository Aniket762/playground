const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "../functions/output");

// if the code directory is not found, make it synchronously
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp = (filepath) => {
  //@[jobid,extension] -- [21221212-12122e-12esq21,cpp]
  const jobId = path.basename(filepath).split(".")[0];

  // generating the output file
  const outPath = path.join(outputPath, `${jobId}.out`);

  return new Promise((resolve, reject) => {
    // exec runs 2 child process together

    exec(
      `g++ ${filepath} -o ${outPath} && cd ${outputPath} && ./${jobId}.out `,
      (error, stdout, stderr) => {
        error && reject({ error, stderr });
        stderr && reject(stderr);
        resolve(stdout);
      }
    );
  });
};

module.exports = {
  executeCpp,
};
