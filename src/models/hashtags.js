const mongoose = require('mongoose')

const hashtagSchema = new mongoose.Schema({
    tittle: {
        type: String,
        required: [true, "Hashtag is missing"],
        maxlength : [30 , "Hashtag characters limit exceeded"]

    },

    tweets: [

        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }

    ]

}, { timestamps: true })


const Hashtag = mongoose.model('Hashtag', hashtagSchema)
module.exports = Hashtag