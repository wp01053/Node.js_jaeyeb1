const http = require('http');
const url = require('url');
const sHost = 'localhost';
const nPort = 8000;

function start(port, hostname, route, handle) {
    let sPostData = '';
    function onRequest(req, res) {
        let sPathname = url.parse(req.url).pathname;
        req.setEncoding('utf8');
        req.addListener('data', function (postDataChunk) {
            sPostData += postDataChunk;
            console.log('POST data chunk: ' + postDataChunk);
        });
        req.addListener('end', function () {
            route(sPathname, handle, res, sPostData);
        });
    }
    http.createServer(onRequest).listen(nPort, hostname);
    console.log('Server running at http://' + sHost + ':' + nPort);
}


    exports.start = start;