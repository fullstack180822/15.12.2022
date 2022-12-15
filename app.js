
const http = require('http')
const fs = require('fs')

const host = 'localhost';
const port = 9000;

function readfileasync(path_to_file) {
    return new Promise((resolv, reject) => {
        fs.readFile(path_to_file, (err, data) => {
            if (!err) {
                resolv(data)
            }
            else {
                reject(err)
            }
        })
    })
}

const server = http.createServer(async (request, response) => {
    // 200 - success
    // 300 - redirect
    // 400 - bad request [404]
    // 500 - server error
    //response.setHeader("Content-Type", "application/json");
    //response.setHeader("Content-Type", "text/html");

    //response.writeHead(200);
    //response.end('<h1>Welcome to my Server!!</h1>')
    //response.end(`{status: 'ok'}`)

    // response.end(`
    //             <!DOCTYPE html>
    //         <html lang="en">
    //         <head>
    //             <meta charset="UTF-8">
    //             <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //             <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //             <title>Document</title>
    //         </head>
    //         <body>
    //             <h1>HELLO</h1>
    //         </body>
    //         </html>`)

    console.log(request.url);
    switch (request.url) {
        case "/":
        case "/index.html":
            try {
                const data = await readfileasync(__dirname + '/index.html')
                response.setHeader("Content-Type", "text/html");
                response.writeHead(200);
                response.end(data);
            }
            catch (err) {
                response.writeHead(500);
                response.end(err);
                return;
            }
        case "/books":
            try {
                const data = await readfileasync(__dirname + '/books.html')
                response.setHeader("Content-Type", "text/html");
                response.writeHead(200);
                response.end(data);
            }
            catch (err) {
                response.writeHead(500);
                response.end(err);
                return;
            }
        case "/hello":
            response.setHeader("Content-Type", "text/html");
            response.writeHead(200);
            response.end(`<script>document.write('hello')</script>`);
            break;
        case "/todos":
            try {
                const data = await readfileasync(__dirname + '/todos.json')
                response.setHeader("Content-Type", "application/json");
                response.writeHead(200);
                response.end(data);
            }
            catch (err) {
                response.writeHead(500);
                response.end(err);
                return;
            }
        case "/random":
            try {
                const data = await readfileasync(__dirname + '/random_user.json')
                response.setHeader("Content-Type", "application/json");
                response.writeHead(200);
                response.end(data);
            }
            catch (err) {
                response.writeHead(500);
                response.end(err);
                return;
            }
            case "/package.json":
                try {
                    const data = await readfileasync(__dirname + '/package.json')
                    response.setHeader("Content-Type", "application/json");
                    response.writeHead(200);
                    response.end(data);
                }
                catch (err) {
                    response.writeHead(500);
                    response.end(err);
                    return;
                }            
        default:
            response.writeHead(200);
            response.end(`<h1> your url :<br /> ${request.url}</h1>`);
            break;
    }
})

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})