const queue = require('./js/messageQueue');
const port = 3000;
const ip = '127.0.0.1';


const keypressHandler = require('./js/keypressHandler');
keypressHandler.initialize(queue.enqueue);

const httpHandler = require('./js/httpHandler');
httpHandler.initialize(queue);

const http = require('http');
const server = http.createServer(httpHandler.router);


server.listen(port, ip);
console.log('Server is running in the terminal!');
console.log(`Listening on http://${ip}:${port}`);
