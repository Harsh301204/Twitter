const mongoose = require('mongoose')
const { Schema } = mongoose


const TweetSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    userEmail: String,

    comments: [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'comment'
        }
    ]


}, { timestamps: true })

const Tweet = mongoose.model('Tweet', TweetSchema)
module.exports = Tweet
