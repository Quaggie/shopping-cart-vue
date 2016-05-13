const mongoose = require('mongoose');
const bluebird = require('bluebird');
const database = require('./config/database');
const url = database.url;

// Options
mongoose.Promise = bluebird;
var options = { promiseLibrary: bluebird };

// Connection
mongoose.connect(url, options);

module.exports = mongoose;
