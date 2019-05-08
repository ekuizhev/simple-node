const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const routes = require('./routes');

const app = express();

// enable body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable cors
app.use(cors());

// use express json
app.use(express.json());

// enable logger
app.use(logger('dev'));

// enable routes
app.use('/', routes);


// handle different errors
app.use((err, req, res, next) => {
  if (!err) {
    next();

    return;
  }

  res.status(500);
  res.send('500: Internal server error');
});

// handle 404 errors
app.use('*', (req, res) => {
  res.status(404);
  res.send('Page not found!');
});

module.exports = app;
