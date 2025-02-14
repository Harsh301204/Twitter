import mongoose from 'mongoose'
const { Schema } = mongoose

const CommentSchema = new Schema({
    content: {
        type: String,
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },

    onModel: {
        type: String,
        required: true,
        enum: ['Tweet', 'Comment']
    },

    commentable : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        refPath : 'OnModel'
    },

    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'comment'
        }
    ]

}, { timestamps: true })

const comment = mongoose.model('comment', CommentSchema)
export default comment