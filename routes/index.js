var express = require('express');
var router = express.Router();
var config = require("../config/config");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({ success: true, data: 'Welcome to '+config.app.name });
});

router.get('/ping', function(req, res, next) {
  res.status(200).json({ success: true, message: 'Ping success'});
});

module.exports = router;
