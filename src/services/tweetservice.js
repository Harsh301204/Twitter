// const { TweetRepository, HashtagRepository } = require('../repository/index')
import { TweetRepository , HashtagRepository } from '../repository/index.js'

export  class tweetService {
    constructor() {
        this.tweetRepository = new TweetRepository()
        this.hashtagRepository = new HashtagRepository()
    }

    async create(data) {
        try {
            const content = data.content
            const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substr(1)); // This is a RegEx that matches hastags substring
            const tweet = await this.tweetRepository.create(data)
            let alreadyPresentHashtags = (await this.hashtagRepository.findByName(tags))
            let tittleOfPresentTags = alreadyPresentHashtags.map(tags => tags.tittle)
            let newtags = tags.filter(value => !tittleOfPresentTags.includes(value))
            newtags = newtags.map(tag => {
                return { tittle: tag, tweets: [tweet.id] }
            })
            const response = await this.hashtagRepository.bulkCreate(newtags)
            alreadyPresentHashtags.forEach((tags) => {
                tags.tweets.push(tweet.id)
                tags.save()
            }
            )

            return tweet


        } catch (error) {
            console.log("There is error in Tweet Service")
            throw error
        }

    }
}

// module.exports = tweetService

