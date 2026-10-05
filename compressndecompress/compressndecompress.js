const fs = require('fs');
const zlib = require('zlib');

const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('input.txt.gz');

input.pipe(zlib.createGzip()).pipe(output);

output.on('finish', () => {
    console.log('File compressed successfully!');

    const compressed = fs.createReadStream('input.txt.gz');
    const decompressed = fs.createWriteStream('decompressed.txt');

    compressed.pipe(zlib.createGunzip()).pipe(decompressed);

    decompressed.on('finish', () => {
        console.log('File decompressed successfully!');
    });
});