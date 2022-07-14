var express = require('express');
var router = express.Router();
let {messages} = require('./index')

console.log(messages)
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('new')
});

router.post('/', function(req, res, next){
  messages.push({text: req.body.message, user: req.body.author, added: new Date()})
  res.redirect('/')
})

module.exports = router;
