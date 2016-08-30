// BASE SETUP
// =============================================================================

// call the packages/ data we need
var express     = require('express');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var mongodbUri  = require('mongodb-uri');
var db          = require('./db.json');

// setup models
var Test        = require('./app/models/test');

// connect to our database
var uri = mongodbUri.format(db);
mongoose.connect(uri);

// initialize Express server
var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set our port
var port = process.env.PORT || 8090;

// ROUTES FOR OUR API
// =============================================================================
// get an instance of the express Router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');

    // make sure we go to the next routes and don't stop here
    next();
});

// test route to make sure everything is working
// (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'Hooray! Welcome to our API!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);

console.log('API Server running on port: ' + port);
console.log('MongoDB running at: ' + uri);
