const fs = require('fs');
fs.mkdirSync('college');
console.log('Directory created');
console.log('Directory contents:');
console.log(fs.readdirSync('.'));
fs.renameSync('college', 'collegeData');
console.log('Directory renamed');
fs.rmdirSync('collegeData');
console.log('Directory removed');