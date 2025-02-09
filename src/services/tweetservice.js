const TweetRepository = require('../repository/index')

class tweetService {
    constructor() {
        this.tweetRepository = new TweetRepository()
    }

    async create(data) {
        try {
            const content = data.content
            const tags = content.match(/#[a-zA-Z0-9_]+/g); // This is a RegEx that matches hastags substring
            tags = tags.map((tag) => tag.substr(1))
            console.log(tags)
            const tweet = await this.tweetRepository.create(data)
            return tweet

            
        } catch (error) {
            console.log("There is error in Tweet Service")
            throw error
        }

    }
}

module.exports = tweetService

