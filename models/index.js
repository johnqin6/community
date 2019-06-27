const mongoose = require('mongoose')

// mongodb数据库服务器地址
const dbUrl = 'mongodb://localhost/community'

mongoose.connect(dbUrl, { 
    poolSize: 20, 
    useCreateIndex: true, 
    userNewUrlParser: true
}, err => {
    if (err) console.log(err)
})

// models
require('./user')
require('./article')
require('./comment')

exports.User = mongoose.model('User')
// exports.Article = mongoose.model('Article')
// exports.Comment = mongoose.model('Comment')