const express = require('express')
const models = require('../models/index')
const md5 = require('blueimp-md5')
const router = express.Router()

const User = models.User
// 进入登陆页面
router.get('/login', (req, res) => {
  res.render('login.html');
})

// 登陆
router.post('/login', (req, res) => {
  let email = req.body.email
  let password = md5(md5(req.body.password))
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
  let email = req.body.email
  let nickname = req.body.nickname
  let password = md5(md5(req.body.password))
  const user = new User({
    email: email,
    nickname: nickname,
    password: password
  })
  User.findOne({email: email}, (err, data) => {
    if(err) {
      console.log(err)
    } else if (data !== null) {
      res.status(200).send({
        err_code: 1,
        message: '邮箱已存在'
      })
    } else {
      User.findOne({nickname: nickname}, (err, data) => {
        if(err) {
          console.log(err)
        } else if (data !== null) {
          res.status(200).send({
            err_code: 2,
            message: '昵称已存在'
          })
        } else {
          user.save((err,next) => {
            if(err) next(err)
            res.status(200).send({
              err_code: 0,
              message: '注册成功'
            })
          })
        }
      })
    }
  })
})

module.exports = router