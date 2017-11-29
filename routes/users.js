var express = require('express');
var userService = require('../service/userService');

var router = express.Router();

/* GET users listing. */
//TODO not working yet
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res) {
    var user = req.body;
    console.log("TESTE");
    userService.saveUser(user).then( function(data) {
      console.log("SALVOU");
      console.log(data);
      res.status(200).json(data);
    }).catch(function (err) {
      console.log("DEU ERRO");
        res.status(200).json(err);
    });


});

module.exports = router;
