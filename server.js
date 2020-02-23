'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`Hello World`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);