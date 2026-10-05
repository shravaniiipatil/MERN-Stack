const fs = require('fs');
fs.writeFileSync('data.txt', 'Hello Node.js');
console.log('File written successfully');
let data = fs.readFileSync('data.txt', 'utf8');
console.log('File content:', data);
fs.appendFileSync('data.txt', '\nWelcome to File System');
console.log('Data appended successfully');
const fd = fs.openSync('data.txt', 'r');
console.log('File opened successfully');
fs.closeSync(fd);
console.log('File closed successfully');
fs.renameSync('data.txt', 'newdata.txt');
console.log('File renamed successfully');
fs.unlinkSync('newdata.txt');
console.log('File deleted successfully');

