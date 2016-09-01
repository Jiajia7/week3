var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');
var indexRouter = require('./routes/index');
var mongoose = require('mongoose');

mongoose.connect('mongodb://jia:77@ds017896.mlab.com:17896/tinyurl');

app.use('/public', express.static(__dirname + "/public"));

app.use('/api/v1', restRouter);

app.use('/', indexRouter);

app.use('/:shortUrl', redirectRouter);

app.listen(3000);