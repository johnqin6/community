const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CommentSchema = new Schema({
    commentArticleId: {
        type: String,
        required: true
    },
    commentator: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    comment_time: {
        type: Date,
        default: Date.now
    },
    reply: {  // 回复
        type: String
    }
})

mongoose.model('Comment', CommentSchema)