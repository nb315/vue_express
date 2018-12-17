var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/add', function(req, res, next) {
  res.send('add');
});

module.exports = router;
