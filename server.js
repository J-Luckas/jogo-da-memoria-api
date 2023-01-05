const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./server/data.json');
const middlewares = jsonServer.defaults();
const port = 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => console.log('listening on port 3000'));