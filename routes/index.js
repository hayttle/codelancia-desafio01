var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Desafio 1  - Codelândia' })
})

module.exports = router
