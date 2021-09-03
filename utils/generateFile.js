const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid"); // v4 as uuid

const dirCode = path.join(__dirname, "../functions/input");

// if the code directory is not found, make it synchronously
if (!fs.existsSync(dirCode)) {
  fs.mkdirSync(dirCode, { recursive: true });
}

const generateFile = async (format, code) => {
  const jobId = uuid();
  // create file for every code we write with format being the lang
  const filename = `${jobId}.${format}`;

  // create the file in the code working dir
  const filepath = path.join(dirCode, filename);

  // write code in the corresponding filepath, with code being the file content
  await fs.writeFileSync(filepath, code);

  return filepath;
};

module.exports = {
  generateFile,
};
