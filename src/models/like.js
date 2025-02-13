import mongoose from 'mongoose'

const LikeSchema = new mongoose.Schema({

    onModel: {                               // Here We store Model type that either we liked on Tweet or on a Comment
        type: String,        
        required: true,
        enum: ['Tweet', 'Comment']
    },

    likeable: {                          // if we liked on a tweet , we can store tweet id here or comment id if we liked a comment
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    },

    user: {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'user'
    }


}, { timestamps: true })

const Like = mongoose.model('Like' , LikeSchema)
export default Like