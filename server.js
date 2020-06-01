'use strict';

const request = require("request");
const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';

// App
const app = express();

app.get('/', (req, res) => {
  return res.send(`Hello World`);
});

app.listen(PORT);
console.log(`Running on port :${PORT}`);
