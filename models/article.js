// 文章集合设计
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ArticeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        enum: [1, 2, 3, 4],  // 1. 精华 2. 分享 3. 问答 4. 招聘
        required: true,
        default: 1  
    },
    artice: {
        type: String,
        default: ''
    },
    publish_time: {
        type: Date,
        default: Date.new
    },
    update_time: {
        type: Date
    },
    browse_num: {  // 浏览量
        type: Number,
        default: 0
    },
    concern_num: {  // 关注量
        type: Number,
        default: 0
    },
    reply_num: {  // 回复数
        type: Number,
        default: 0
    }
})

mongoose.model('Artice', ArticeSchema)