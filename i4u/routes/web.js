var express = require('express');
var web = express.Router();

/* GET home page. */
web.get('/', function(req, res, next) {
  res.render('index', { title: 'i4U - 设备数字化平台' });
});

module.exports = web;
