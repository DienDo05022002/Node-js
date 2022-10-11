const express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('v2/version2');
});

module.exports = router;