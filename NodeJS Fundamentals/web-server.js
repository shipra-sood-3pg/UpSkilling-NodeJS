import http from 'http';
import url from 'node:url';

const server = http.createServer((req, res) => {
    const routePath = req.url;

    switch(routePath) {
        case '/':
        case '/home':
            res.writeHead(200, {
                'Content-Type': 'text/html',
                'my-header': 'hello-world-nodejs'
            });
            res.end('<h1>Welcome to Home Page</h1>');
            break;

        case '/product':
            res.writeHead(200, {
                'Content-Type': 'text/html',
                'my-header': 'hello-world-nodejs'
            });
            res.end('<h1>Product list Page</h1>');
            break;
        
        default:
            res.writeHead(404, {
                'Content-Type': 'text/html',
                'my-header': 'hello-world-nodejs'
            });
            res.end('<h1>OOPs..!!! Page Not Found</h1>');
    }
});

server.listen(5050, '127.0.0.1', () => {
    console.log('Node Server is listening to request on Port 5050');
});