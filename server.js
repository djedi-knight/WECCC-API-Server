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
// (accessed at GET http://localhost:8090/api)
router.get('/', function(req, res) {
  res.json({ message: 'Hooray! Welcome to our API!' });
});

// Routes for /tests
// ----------------------------------------------------
router.route('/tests')

  // create a test
  // (accessed at POST http://localhost:8090/api/tests)
  .post(function(req, res) {
    // create a new instance of the Test model
    var test = new Test();

    // set the tests name (comes from the request)
    test.name = req.body.name;

    // save the test and check for errors
    test.save(function(err) {
      if (err)
        res.send(err);

      res.json({ message: 'Test created!' });
    });
  })

  // get all the tests
  // (accessed at GET http://localhost:8090/api/tests)
  .get(function(req, res) {
    Test.find(function(err, tests) {
      if (err)
        res.send(err);

      res.json(tests);
    });
  });

// Routes for /tests/:test_id
// ----------------------------------------------------
router.route('/tests/:test_id')

  // get the test with that id
  // (accessed at GET http://localhost:8080/api/tests/:test_id)
  .get(function(req, res) {
    Test.findById(req.params.test_id, function(err, test) {
      if (err)
        res.send(err);

      res.json(test);
    });
  })

  // update the test with this id
  // (accessed at PUT http://localhost:8090/api/tests/:test_id)
  .put(function(req, res) {
    // use our test model to find the test we want
    Test.findById(req.params.test_id, function(err, test) {
      if (err)
        res.send(err);

      // update the test info
      test.name = req.body.name;

      // save the test
      test.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Test updated!' });
      });
    });
  });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);

console.log('API Server running on port: ' + port);
console.log('MongoDB running at: ' + uri);
