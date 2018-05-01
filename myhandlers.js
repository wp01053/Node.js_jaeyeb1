function start(){
    res.writeHead(200, {'Content-Type' :'texts/html' });
    res.write('Hello, start!');
    res.end();    
}
function hello(){
    res.writeHead(200, {'Content-Type' :'texts/html' });
    res.write('Hello, hello!');
    res.end();    
}

exports.start =start;
exports.hello = hello;