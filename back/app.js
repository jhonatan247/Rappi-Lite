var express = require('express');
var cors = require('cors');

var indexRouter = require('./routes/index.js');

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/user', indexRouter.user);
app.use('/api/guard', indexRouter.guard);
app.use('/api/customer', indexRouter.customer);
app.use('/api/restaurant', indexRouter.restaurant);

module.exports = app;
