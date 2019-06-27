// 用户集合设计
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created_time: {
        type: Date,
        default: Date.now  // 注意不能写 Date.now() 因为会即刻调用
    },
    last_modified_time: {  // 最后修改时间
        type: Date,
        default: Date.new
    },
    avatar: {
        type: String,
        default: '/public/img/avatar-default.png'
    },
    introduce: {
        type: String,
        default: ''
    },
    gender: {
        type: Number,
        enum: [-1, 0, 1], // 枚举：-1：保密, 0: 女，1：男
        default: -1
    },
    birth: {
        type: Date
    },
    status: {
        type: Number,
        enum: [0, 1, 2], // 0: 没有权限限制，1：不可以评论, 2：不可以登陆
        deafult: 0
    }
})

mongoose.model('User', UserSchema);
