const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CommentSchema = new Schema({
    commentArticleId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Article'
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