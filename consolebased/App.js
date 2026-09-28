const fs = require("fs");

// Write data into file
fs.writeFileSync(
    "student.txt",
    "Name: Shravani\nCourse: CSE"
);

console.log("Student details written successfully.");

// Read data from file
const data = fs.readFileSync("student.txt", "utf8");

console.log("\nStudent Details:");
console.log(data);