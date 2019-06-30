const mongoose = require('mongoose')

// mongodb数据库服务器地址
const dbUrl = 'mongodb://localhost/community'

mongoose.connect(dbUrl, { 
    poolSize: 20, 
    useCreateIndex: true, 
    useNewUrlParser: true
}, err => {
    if (err) console.log(err)
})

// models
require('./user')
require('./article')
require('./comment')

let User = mongoose.model('User')
let Article = mongoose.model('Article')
let Comment = mongoose.model('Comment')

module.exports = {
  User: User,
  Article: Article,
  Comment: Comment
}