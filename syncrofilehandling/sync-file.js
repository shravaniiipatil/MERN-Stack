const fs = require("fs");

// Write to file
fs.writeFileSync("example.txt", "Hello, this is Node.js synchronous file handling.");

console.log("Data written successfully.");

// Read from file
const data = fs.readFileSync("example.txt", "utf8");

console.log("Data read from file:");
console.log(data);