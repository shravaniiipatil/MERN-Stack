const fs = require('fs');

// 1. Create Directory
fs.mkdirSync('college');

console.log('Directory created');

// 2. Read Directory
console.log('Directory contents:');
console.log(fs.readdirSync('.'));

// 3. Rename Directory
fs.renameSync('college', 'collegeData');

console.log('Directory renamed');

// 4. Remove Directory
fs.rmdirSync('collegeData');

console.log('Directory removed');