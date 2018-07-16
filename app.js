const http = require('http');
const url = require('url');
const apGet = require('./modules/apGet');
const read = require('./modules/read');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "application/json", "X-Content-Type-Options": "nosniff", "X-Frame-Options": "deny", "Content-Security-Policy": "default-src 'none'"});
    if (request.method === 'POST') {
        read.collectRequestData(request, result => {
            /** @namespace result.character */
            apGet.GetChar(result.character, response);
        });
    } else { // For get request
        let q = url.parse(request.url, true).query; // Straight up w3schools _(:3」∠)_
        if(q.character) {
            apGet.GetChar(q.character, response);
        } else {
            response.end("Cannot be undefined"); // Catch if no data given
        }
    }
});
server.listen(3300, "0.0.0.0"); // Change the port if you want ¯\_(ツ)_/¯