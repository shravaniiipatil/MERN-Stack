const fs = require('fs');

const reader = fs.createReadStream('input.txt');
const writer = fs.createWriteStream('output.txt');

reader.pipe(writer);

writer.on('finish', () => {
    console.log('File copied successfully using pipe!');
});