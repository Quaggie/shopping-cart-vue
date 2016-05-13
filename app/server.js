'use strict'

const express  = require('express');
const app      = express();
const morgan   = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');

// Port
const port     = process.env.PORT || 3333;

// Initializing mongoose
require('./mongoose');

// Configuration
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

app.set('appPath', path.join(__dirname, '../public'));
app.use( express.static( app.get('appPath') ) );


// Routes
require('./routes.js')(app);

// Starting server
app.listen( port, () => console.log("Listening on port: " + port));
