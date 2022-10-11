const express = require('express');
const app = express();
var morgan = require('morgan');
require('dotenv').config()
var helmet = require('helmet')
var createError = require('http-errors')

app.use(morgan('combined'))
app.use(helmet())

//use version
app.use(require('./api'))

app.get('/', (req, res) => {
    res.send('Hello World eieie!')
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404, "Not found"));
});
app.use(function(req, res, next) {
    res.status(err.status || 500);
    res.render('error');
  });


//import to sever
module.exports = app;