const express = require('express');
const path = require('path');

const app = express();

app.use('/src/dist', express.static(path.join(__dirname, 'src', 'dist')));

app.use('/mockServiceWorker.js', express.static(path.join(__dirname, 'public/mockServiceWorker.js')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'dist', 'index.html'));
});

app.listen(3000, () => {
    console.log(`Server listening on http://localhost:3000`)
});
