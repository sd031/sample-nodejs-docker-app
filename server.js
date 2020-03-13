'use strict';

const request = require("request");
const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';
const App2 = process.env.APP_2;

// App
const app = express();
app.get('/', (req, res) => {
  return res.send(`It's App 1`);
});

app.get('/call-app-2', (req, res) => {
var options = { method: 'GET',
  url: `http://${App2}`,
  headers: 
   { 'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) {
    return res.send(error.message);
  }
  return res.send(body);
});

});

app.listen(PORT, HOST);
console.log(`Running on port :${PORT}`);