function route(pathname, handle, res, posdata) {
    console.log('Routing for' + pathname);
    if (typeof handle[pathname] === 'function')
        return handle[pathname](res,posdata);
    else {
        res.writeHead(404, { 'Content-Type': 'texts/html' });
        res.write('404 Not found!');
        res.end();
    }
}
exports.route = route;