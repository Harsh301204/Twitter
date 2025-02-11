import Tweet from '../models/tweet.js'
import CrudRepository from './crud-repo.js'


class TweetRepository extends CrudRepository {
    constructor(){
        super(Tweet)
    }

    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate('comments').lean()
            return tweet
        } catch (error) {
            console.log("Something went wrong in repo layer")
            throw error
        }
    }

    async getAll(offset, limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit)
            return tweet
        } catch (error) {
            console.log("Something Went Wrong in repo layer")
            throw error
        }
    }
}

export default TweetRepository