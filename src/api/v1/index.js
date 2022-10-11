const express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('v1/test');
});

module.exports = router;