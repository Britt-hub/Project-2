// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  var db = require('../models');

  // Routes =============================================================

  app.get('/', function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Todo.findAll({}).then(function(dbBooking) {
      // We have access to the todos as an argument inside of the callback function
      res.render('index', dbBooking);
    });
  });

  app.post('/api/htmlforhotel', function(req, res) {
    if (hotelData.length < 5) {
      hotelData.push(req.body);
      res.json(true);
    } else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  app.get('/htmlforhotel',function(req,res){
    db.Todo.findAll({
      where: { 

      }

    }).then(function(dbBooking)
    // do something, get instanceof, store it in placeholder,
    res.render('hotel', placeholder);
  });

};
