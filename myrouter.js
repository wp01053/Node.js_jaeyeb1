function route(pathname, handle, res, input     ) {
    console.log('Routing for' + pathname);
    if (typeof handle[pathname] === 'function')
        return handle[pathname](res,input);
    else {
        res.writeHead(404, { 'Content-Type': 'texts/html' });
        res.write('404 Not found!');
        res.end();
    }
}
exports.route = route;