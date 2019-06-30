const express = require('express')
const models = require('../models/index')
const md5 = require('blueimp-md5')
const router = express.Router()
const User = models.User
const Article = models.Article

router.get('/', (req, res) => {
  let user = req.session.user || ''
  Article.find((err, docs, next) => {
    if (err) next(err)
    res.render('index.html',{
      user,
      article: docs
    });
  })
})

// 账户设置页面
router.get('/settings/profile', (req, res) => {
  let user = req.session.user || ''
  res.render('settings/profile.html', {
    user
  })
})

// 编辑用户信息
router.post('/user/editInfo', (req, res) => {
  let id = req.session.user._id
  User.findByIdAndUpdate(id, req.body, (err, next) => {
    if (err) next(err)
    res.status(200).send({
      err_code: 0,
      message: '用户信息更新成功'
    })
  })
})

// 上传或更新图像
router.post('/updateAvater', (req, res) => {
  let avatar = req.body.avatar
  let id = req.session.user._id
  User.findByIdAndUpdate(id, { avatar: avatar }, (err, next) => {
    if (err) next(err)
    res.status(200).send({
      err_code: 0,
      message: '头像上传成功'
    })
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

// 发布页面
router.get('/topics/new', (req, res) => {
  res.render('topic/new.html')
})

// 发布文章
router.post('/artice/add', (req, res) => {
  let article = new Article({
    ...req.body
  })
  article.save((err, next) => {
    if (err) next(err)
    res.status(200).send({
      err_code: 0,
      message: '文章添加成功'
    })
  })
})

// 查看文章
router.get('/topics/show', (req, res) => {
  let id = req.query.id.replace(/\"/g,"") 
  Article.findById(id, (err, doc, next) => {
    if (err) res.send(err)
    let browse_num = doc.browse_num + 1;
    Article.findByIdAndUpdate(id,{browse_num: browse_num}, (err, next) => {
      if(err) next(err)
    })
    res.render('topic/show.html',{
      article: doc
    })
  })
})

module.exports = router