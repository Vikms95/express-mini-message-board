var express = require('express');
var router = express.Router();


const messages =  [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello world!",
    user: "Charles",
    added: new Date()
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/', function(req, res, next) {
  res.render('new')
});

router.post('/', function(req, res, next){
  messages.push({text: req.body.text, author: req.body.author, added: new Date()})
})

module.exports = {router, messages};
