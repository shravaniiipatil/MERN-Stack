const fs = require('fs');

// 1. Write data into file
fs.writeFileSync('data.txt', 'Hello Node.js');
console.log('File written successfully');

// 2. Read data from file
let data = fs.readFileSync('data.txt', 'utf8');
console.log('File content:', data);

// 3. Append data
fs.appendFileSync('data.txt', '\nWelcome to File System');
console.log('Data appended successfully');

// 4. Open file
const fd = fs.openSync('data.txt', 'r');
console.log('File opened successfully');

// 5. Close file
fs.closeSync(fd);
console.log('File closed successfully');

// 6. Rename file
fs.renameSync('data.txt', 'newdata.txt');
console.log('File renamed successfully');

// 7. Delete file
fs.unlinkSync('newdata.txt');
console.log('File deleted successfully');

