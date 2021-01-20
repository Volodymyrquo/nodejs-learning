const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  if (req.url == '/') {
    res.write("<h1 style='color: blue'>Hello node js from main domain</h1>");
    res.end();
  } else {
    switch (req.url) {
      case '/banana':
        res.write(
          "<h1 style='color: yellow'>Hello node js from other domain <span style='text-transform: uppercase'>banana</span></h1>"
        );
        res.end();
        break;
      case '/orange':
        res.write(
          "<h1 style='color: orange'>Hello node js from other domain orange</h1>"
        );
        res.end();
        break;
      default:
        res.write(
          "<h1 style='color: green'>Hello node js from other domain default</h1>"
        );
        res.end();
    }
  }
});

server.listen('3000');
