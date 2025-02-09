const mongoose = require('mongoose')
const { Schema } = mongoose


const TweetSchema = new Schema({
    content: {
        type: String,
        required: [true, "Content is Required"],
        maxlength: [300, "Tweet Cannot be more than of 300 Characters"]
    },

    hashtag : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Hashtag'
        }
    ]
}, { timestamps: true })


const Tweet = mongoose.model('Tweet', TweetSchema)
module.exports = Tweet
