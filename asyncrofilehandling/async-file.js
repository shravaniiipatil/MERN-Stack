const fs = require("fs");
fs.writeFile("example.txt", "Hello, this is Node.js asynchronous file handling.", (err) => {
    if (err) {
        console.log("Error:", err);
        return;
    }
    console.log("Data written successfully.");
    fs.readFile("example.txt", "utf8", (err, data) => {
        if (err) {
            console.log("Error:", err);
            return;
        }
        console.log("Data read from file:");
        console.log(data);
    });
});

