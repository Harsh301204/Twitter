// const mongoose = require('mongoose')
import mongoose from 'mongoose'
const { Schema } = mongoose


const TweetSchema = new Schema({
    content: {
        type: String,
        required: [true, "Content is Required"],
        maxlength: [300, "Tweet Cannot be more than of 300 Characters"]
    },

    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like',
        }

    ],

    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comment'
        }
    ],

    image: {
        type: String
    }



}, { timestamps: true })


const Tweet = mongoose.model('Tweet', TweetSchema)
export default Tweet
