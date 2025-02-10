const express = require('express')
const { PORT } = require('./config/serverconfig')
const connect = require('./config/database')
const app = express()

const Tweet = require('./models/tweet')
const comment = require('./models/comment')
const TweetRepository = require('./repository/tweet-repo')
const HashtagRepo = require('./repository/hashtag-repo')
const tweetService = require('./services/tweetservice')


app.listen(PORT, async () => {
    console.log(`Server Started on PORT : ${PORT}`)
    await connect();
    console.log("Mongo DB Connected")
    
   

    
})

