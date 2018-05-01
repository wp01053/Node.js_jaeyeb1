function sleep(milliSec){
    let timeStart = new Date().getTime();
    while (new Date().getTime() < timeStart + milliSec);
}

function start(){
    res.writeHead(200, {'Content-Type' :'texts/html' });
    res.write('Hello, start!');
    res.end();    
}
function hello(res){
   // sleep(20000);
   setTimeout(function(){
    
    res.writeHead(200, {'Content-Type' :'texts/html' });
    res.write('Hello, hello!');
    res.end();    
   }, 20000);
}

exports.start = start;
exports.hello = hello;