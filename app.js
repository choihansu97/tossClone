const express = require('express');
const path = require('path');

const app = express();

app.use('/src/dist', express.static(path.join(__dirname, 'src', 'dist')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'dist', 'index.html'));
});

module.exports = { app }