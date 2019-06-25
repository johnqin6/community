const express = require('express')

const router = express.Router()

// 进入登陆页面
router.get('/login', (req, res) => {
    res.render('login.html');
})

// 进入注册页面
router.get('/register', (req, res) => {
  res.render('register.html');
})

module.exports = router