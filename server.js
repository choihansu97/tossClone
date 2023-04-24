const { createServer } = require('http');
const { setupServer } = require('msw/node');
const { handlers } = require('./src/mocks/handlers');
const express = require('express');
const path = require('path');

const app = express();

app.use('/src/dist', express.static(path.join(__dirname, 'src', 'dist')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
const server = createServer(app);

const worker = setupServer(...handlers);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);

    worker.listen();
});
