const express = require('express')
const { PORT } = require('./config/serverconfig')
const connect = require('./config/database')
const app = express()

// const Tweet = require('./models/tweet')
const comment = require('./models/comment')
const TweetRepository = require('./repository/tweet-repo')


app.listen(PORT, async () => {
    console.log(`Server Started on PORT : ${PORT}`)
    await connect();

    // const tweet = await Tweet.create({
    //     content : "Fourth Tweet",
    //     userEmail : "HarshSharma@gmail.com"

    // })
    // const tweet = await Tweet.findById('67a5d4e8b51348d3bd28f8a9')
    // tweet.userEmail = "HarshSharma@gmail.com"
    // await tweet.save()

    // console.log(tweet)
    const tweetRepo = new TweetRepository()
    // const tweet = await tweetRepo.update('67a5d6ebcf7c0dd87d5dd20a' ,
    //      { content : "New added in repo of tweet and now lwsts cehck it"} 
       
    // )
    // console.log(tweet)

    // const tweet = await tweetRepo.create({content : "This is Second with comment" , comments : {
    //     content : "This is My comment which is passed along with main content property"
    // }})
    // console.log(tweet)
    // tweet.comments.push({content : "This is our first comment"})
    // await tweet.save()
    // console.log(tweet)
    // tweet.userEmail = 'HarrySharma@ne.com'
    // await tweet.save()
    // console.log(tweet)

    // const comment1 = await comment.create({content : "this is from comment model"})
    // const tweet = await tweetRepo.create({content : "Trying to Linking 2 models"})
    // console.log(tweet)
    // tweet.comments.push(comment1)
    // await tweet.save()
    // console.log(tweet)

    const tweet = await tweetRepo.getWithComments('67a618e14c259b901c586419')
    console.log(tweet)
    console.log("Mongo DB Connected")
})