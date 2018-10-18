var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('users', {title: 'Users', users: ['User1', 'User2', 'User3', 'User4']});
});

module.exports = router;
