const vision = require("@google-cloud/vision");
const fileName = "./trycode.jpeg";

const detectText = async (fileName) => {
  // Creates a client
  const client = new vision.ImageAnnotatorClient({
    keyFilename: __dirname + "/APIKey.json",
  });

  // Performs text detection on the local file
  const [result] = await client.textDetection(fileName);
  const detections = result.textAnnotations[0].description;

  // console.log("Text:");
  // console.log(detections);
  return detections;
};

module.exports = {
  detectText,
};
