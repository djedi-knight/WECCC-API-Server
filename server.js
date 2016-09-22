/* global global  */
/* global require */
/* global process */
/* global console */

// BASE SETUP
// =============================================================================

// call the packages/ data we need
var express     = require('express');
var bodyParser  = require('body-parser');
var logger      = require('morgan');
var mongoose    = require('mongoose');
var mongodbUri  = require('mongodb-uri');
var fixtures    = require('pow-mongoose-fixtures');
var minimist    = require('minimist');

var config      = require('./config.json');

var index       = require('./app/routes/index');
var scoreCards  = require('./app/routes/scoreCards');
var pages       = require('./app/routes/pages');
var reports     = require('./app/routes/reports');

// get arguments
var args = minimist(process.argv.slice(2));

// Use native Node promises for Mongoose
mongoose.Promise = global.Promise;

// connect to our database
var uri = mongodbUri.format(config);
console.log('Connecting to Database => ' + uri);
mongoose.connect(uri);

// initialize our database with fixtures (only for DEV environment)
var db = mongoose.connection;

if (args.env === 'DEV') {
  console.log('Applying Fixtures...');
  fixtures.load('app/fixtures', db, function(err) {
    if (err) {
      throw new Error(err);
    }
  });
}

// initialize Express server
console.log('Initializing Express Server...');
var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure app to log information
app.use(logger('combined'));

// set our port
var port = 8090;

// REGISTER OUR ROUTES ---------------------------------------------------------
// all of our routes will be prefixed with /api
console.log('Registering Routes...');
app.use('/api', index);
app.use('/api/scoreCards', scoreCards);
app.use('/api/pages', pages);
app.use('/api/reports', reports);

// START THE SERVER
// =============================================================================
console.log('Starting the Server...');
app.listen(port);
