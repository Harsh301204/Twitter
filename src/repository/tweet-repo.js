const Tweet = require('../models/tweet')

class TweetRepository {
    async create(data){
        try {
            const tweet = await Tweet.create(data)
            return tweet
        } catch (error) {
            console.log("Something went wrong in repo layer")
            throw error
        }
    }

    async get(id){
        try {
            const tweet = await Tweet.findById(id)
            return tweet
        } catch (error) {
            console.log("Something went wrong in repo layer")
            throw error
        }
    }

    async getWithComments(id){
        try {
            const tweet = await Tweet.findById(id).populate('comments')
            return tweet
        } catch (error) {
            console.log("Something went wrong in repo layer")
            throw error
        }
    }

    async delete(id){
        try {
            const tweet = await Tweet.findByIdAndDelete(id)
            return tweet
        } catch (error) {
            console.log("Something went wrong in repo layer")
            throw error
        }
    }

    async update(id , data){
        try {
            const tweet = await Tweet.findByIdAndUpdate(id , data , {new : true})
            return tweet
        } catch (error) {
            console.log("Something went wrong in repo layer")
            throw error
        }
    }
}


module.exports = TweetRepository