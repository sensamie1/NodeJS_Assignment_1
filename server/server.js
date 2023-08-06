const http = require("http");

const hostname = 'localhost';
const port = 8000;

// Request listener
const requestListener = function (request, response) {
  console.log(request);
  response.writeHead(200); // Status code 200 = OK
  response.write("Hello World");
  response.end();
};

//create server
const server = http.createServer(requestListener)

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})