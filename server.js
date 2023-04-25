const { createServer } = require('http');
const { setupServer } = require('msw/node');
const { app } = require('./app');
const {handlers} = require('./src/handlers');

const server = createServer(setupServer(...handlers), app);

server.listen(3000, () => {
    console.log(`Server listening on http://localhost:3000`)
});
