// const express = require('express')
import express from 'express'
import {connect} from './config/database.js'
// const { PORT } = require('./config/serverconfig')
import { PORT } from './config/serverconfig.js'
// const connect = require('./config/database')
const app = express()


// const Tweet = require('./models/tweet')
// const comment = require('./models/comment')
// const TweetRepository = require('./repository/tweet-repo')
// const HashtagRepo = require('./repository/hashtag-repo')
// const tweetService = require('./services/tweetservice')
import { tweetService } from './services/tweetservice.js'


app.listen(PORT, async () => {
    console.log(`Server Started on PORT : ${PORT}`)
    await connect();
    console.log("Mongo DB Connected")

    const service = new tweetService()
    // await service.create({content : "This is #after #Refactoring"})
    await service.create({content : "This is #NEW #CONtent with new #hashtags"})
    
   

    
})

