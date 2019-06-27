const express = require('express')
const models = require('../models/index')
const router = express.Router()

const User = models.User
// 进入登陆页面
router.get('/login', (req, res) => {
  res.render('login.html');
})

// 登陆
router.post('/login', (req, res) => {
  let email = req.body.email
  let password = req.body.password
  User.findOne({email: email, password: password}, (err, doc, next) => {
    if(err) next(err) 
    req.session.user = doc
    res.status(200).send({
      err_code: 0,
      message: '登陆成功'
    })
  })
})

// 退出
router.get('/logout', (req, res) => {
  res.redirect('/login')
})

// 进入注册页面
router.get('/register', (req, res) => {
  res.render('register.html');
})

// 注册
router.post('/register', (req, res) => {
  // req.body.password = 
  const user = new User({
    ...req.body
  })
  user.save(err => {
    console.log(err)
  })
})

module.exports = router