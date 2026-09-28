const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        const css = fs.readFileSync(__dirname + "/style.css", "utf8");

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Student Information</title>
                <style>
                    ${css}
                </style>
            </head>

            <body>
                <div class="container">
                    <h1>Student Information</h1>

                    <div class="card">
                        <h2>Shravani Patil</h2>
                        <p><b>Course:</b> Computer Science and Engineering</p>
                        <p><b>College:</b> D. Y. Patil College of Engineering</p>
                        <p><b>Year:</b> Final Year</p>

                        <button onclick="alert('Welcome Shravani!')">
                            Click Me
                        </button>
                    </div>
                </div>
            </body>
            </html>
        `);

        res.end();
    }
});

server.listen(3001, () => {
    console.log("Server running at http://localhost:3001");
});