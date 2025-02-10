// const mongoose = require('mongoose')
import mongoose from 'mongoose'
const { Schema } = mongoose

const CommentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    userEmail: String
}, { timestamps: true })

const comment = mongoose.model('comment', CommentSchema)
export default comment