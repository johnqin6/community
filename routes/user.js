const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  let user = req.session.user || ''
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
  res.render('settings/admin.html')
})

module.exports = router