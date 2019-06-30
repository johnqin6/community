const express = require('express')
const models = require('../models/index')
const md5 = require('blueimp-md5')
const router = express.Router()
const User = models.User

router.get('/', (req, res) => {
  let user = req.session.user || ''
  console.log(user)
  res.render('index.html',{
    user
  });
})

// 账户设置页面
router.get('/settings/profile', (req, res) => {
  let user = req.session.user || ''
  res.render('settings/profile.html', {
    user
  })
})

// 密码设置页面
router.get('/settings/admin', (req, res) => {
  let user = req.session.user || ''
  res.render('settings/admin.html')
})

// 更新密码
router.post('/settings/updatePassword', (req, res) => {
  let id = req.session.user._id
  let password = md5(md5(req.body.password))
  User.findByIdAndUpdate(id, {password: password},(err, next) => {
    if(err) console.log(err)
    res.status(200).send({
      err_code: 0,
      message: '密码更新成功'
    })
  })
})

// 注销账户
router.get('/delUser', (req, res) => {
  let id = req.session.user._id
  User.findByIdAndRemove(id, (err, next) => {
    if(err) next(err)
    res.status(200).send({
      err_code: 0,
      message: '注销账户成功'
    })
  })
})

module.exports = router