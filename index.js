'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./src/error-handlers/404');
const errorHandler = require('./src/error-handlers/500');

const PORT = process.env.PORT || 3002;

app.get('/', (req, res, next) => {
  res.status(200).send('Greetings from this Basic Express Server(previously known as Lab 2)');
});

app.get('/hello', (req, res, next) => {
  let {name} = req.query;
  res.status(200).send(`Hello ${name}!`);
});

app.use('*', notFoundHandler);

app.use(errorHandler);

app.listen(PORT, () => console.log(`running on port ${PORT}`));

// module.exports = {
//   server: app,
//   start: () => app.listen(PORT, () => console.log(`running on port ${PORT}`)),
// };
