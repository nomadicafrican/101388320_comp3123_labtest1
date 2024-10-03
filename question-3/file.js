const fs = require("fs");
const path = require("path");

const logDir = path.join(__dirname, "logs"); // creating the path

if (!fs.existsSync(logDir)) {
  // checks if log directory exists
  fs.mkdirSync(logDir); // Create the Logs directory if it doesn't exist
  console.log("Logs directory created.");

  // Creates files from 0-9 as instructed
  for (let x = 0; x < 10; x++) {
    const fileName = `log${x}.txt`; // giving each log file a name of their index as instructed
    const filePath = path.join(logDir, fileName); // Creating the full file path for writing in file

    fs.writeFileSync(filePath, `Log file number: ${x}`); // Writting text in the  to the log file as instructed
    console.log(`${fileName}`);
  }
} else {
  console.log("Logs directory already exists.");
}
if (fs.existsSync(logDir)) {
  // Checks if directory exists
  const files = fs.readdirSync(logDir); // gets a list of files in logdir

  files.forEach((file) => {
    // looping through each file
    fs.unlinkSync(path.join(logDir, file)); // deletes each file
    console.log(`Delete file...${file}`);
  });

  fs.rmdirSync(logDir);
  console.log("Logs directory deleted.");
} else {
  console.log("Logs directory does not exist.");
}
