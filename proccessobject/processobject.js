console.log("Node Version:", process.version);
console.log("Platform:", process.platform);
console.log("Process ID:", process.pid);
console.log("Current Working Directory:", process.cwd());

console.log("Current Directory:", __dirname);
console.log("Current File:", __filename);

console.log("Hello Node.js");

setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
}, 2000);