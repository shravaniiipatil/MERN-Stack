const fs = require('fs');
fs.open('data.txt', 'w+', (err, fd) => {
    if (err) throw err;
    console.log('File opened successfully');
    fs.write(fd, 'Hello Node.js', (err) => {
        if (err) throw err;
        console.log('Data written successfully');
        const buffer = Buffer.alloc(100);
        fs.read(fd, buffer, 0, buffer.length, 0, (err, bytesRead) => {
            if (err) throw err;
            console.log('File content:');
            console.log(buffer.toString('utf8', 0, bytesRead));
            fs.close(fd, (err) => {
                if (err) throw err;
                console.log('File closed successfully');
            });
        });
    });
});