const express = require('express')
const { PORT } = require('./config/serverconfig')
const connect = require('./config/database')
const app = express()

const comment = require('./models/comment')
const TweetRepository = require('./repository/tweet-repo')


app.listen(PORT, async () => {
    console.log(`Server Started on PORT : ${PORT}`)
    await connect();
    console.log("Mongo DB Connected")

    
})

