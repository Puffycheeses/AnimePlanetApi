const http = require('http');
const url = require('url');
const apGet = require('./modules/apGet');
const read = require('./modules/read');

const server = http.createServer((request, response) => {
    if (request.method === 'POST') {
        read.collectRequestData(request, result => {
            response.writeHead(200, {'Content-Type': 'application/json', "X-Content-Type-Options": "nosniff", "X-Frame-Options": "deny", "Content-Security-Policy": "default-src 'none'"});
            apGet.GetChar(result.character, response);
        });
    } else {
        let q = url.parse(request.url, true).query;
        if(q.character) {
            apGet.GetChar(q.character, response);
        } else {
            response.end("Cannot be undefined");
        }
    }
});
server.listen(8080);





