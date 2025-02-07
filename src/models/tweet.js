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

TweetSchema.virtual('contentWithEmail').get(function process (){
    return `${this.content} is created by user with Email : ${this.userEmail}`
})

const Tweet = mongoose.model('Tweet', TweetSchema)
module.exports = Tweet
