var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/addUser', function (req, res) {
  console.log(req.body.first_name),
  console.log(req.body.last_name),
  console.log(req.body.username),
  console.log(req.body.password)
})


module.exports = router;
