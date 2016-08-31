// BASE SETUP
// =============================================================================

// call the packages/ data we need
var express     = require('express');
var bodyParser  = require('body-parser');
var logger      = require('morgan')
var mongoose    = require('mongoose');
var mongodbUri  = require('mongodb-uri');
var db          = require('./db.json');

var index       = require('./app/routes/index');
var tests       = require('./app/routes/tests');

// Use native Node promises for Mongoose
mongoose.Promise = global.Promise;

// connect to our database
var uri = mongodbUri.format(db);
mongoose.connect(uri);
console.log('MongoDB running at: ' + uri);

// initialize Express server
var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure app to log information
app.use(logger('combined'));

// set our port
var port = process.env.PORT || 8090;

// REGISTER OUR ROUTES ---------------------------------------------------------
// all of our routes will be prefixed with /api
app.use('/api', index);
app.use('/api/tests', tests);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('API Server running on port: ' + port);
