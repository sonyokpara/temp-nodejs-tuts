const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end(`<h1>Welcome to my homepage</h1>`);
  } else if (request.url === "/about") {
    response.end(`<p>Checkout our history</p>`);
  } else {
    response.end(`<p>Page not found <a href="/">Back to homepage </a></p>`);
  }
});

server.listen(5000);
