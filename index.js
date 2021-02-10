const http = require('http'); // http 내장 모듈 호출

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello Server');
    response.end();
}).listen(3000); // Port 3000