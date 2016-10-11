var express = require('express');
var interface = express.Router();

/* GET users listing. */
interface.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
interface.get('/aa', function(req, res, next) {
  res.send('respond with a');
});

module.exports = interface;
