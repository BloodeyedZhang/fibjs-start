const http = require('http');
const path = require('path');

var heloServer = {
    '/:name(fibjs.*)': (req, name) => {
        req.response.write('hello, ' + name + ', I love you.');
    },
    '/:name': (req, name) => {
        req.response.write('hello, ' + name);
    }
};

var rootServer = { 
    '/hello': heloServer,
    '/bonjour': heloServer,
    '*': http.fileHandler(path.join(__dirname, 'web'))
};

var svr = new http.Server(8080, rootServer);

svr.run();