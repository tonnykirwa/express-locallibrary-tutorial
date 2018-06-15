var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// I'm so cool
router.get('/cool', function(req, res, next) {
    res.send('I\'m so cool');
});

module.exports = router;
