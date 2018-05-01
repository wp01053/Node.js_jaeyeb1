const http = require('http');
const url = require('url');
const sHost = 'localhost';
const nPort = 8000;

function start(route, handle) {
 function onRequest(req, res) {
 console.log('Request received.');
 let sPathname = url.parse(req.url).pathname;
 console.log('Request for ' + sPathname + ' received.');
 route(sPathname, handle, res);
    }
 http.createServer(onRequest).listen(nPort, sHost);
 console.log('Server running at http://' + sHost + ':' + nPort);
}

exports.start = start;