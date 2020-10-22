var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
const pathCheck = require('../public/javascripts/functions')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('Api de nombres para papás y mamás');
});
router.post('/', function(req, res, next) {
  pathCheck(req.body.name)
  res.send(arrayResult)
});



module.exports = router;
