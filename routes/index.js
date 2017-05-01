var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('INDEX PAGE');
});

module.exports = router;