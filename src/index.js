import express from 'express'
import {connect} from './config/database.js'
import { PORT } from './config/serverconfig.js'
import bodyparser from 'body-parser'
import {UserRepository , TweetRepository} from './repository/index.js'
import  LikeService  from './services/likeservice.js'


const app = express()

import apiRoutes from './routes/index.js'



app.listen(PORT, async () => {
    console.log(`Server Started on PORT : ${PORT}`)

    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({extended : true}))

    await connect();
     app.use('/api' , apiRoutes)

    console.log("Mongo DB Connected")
    // const userRepo = new UserRepository()
    // const response = await userRepo.create({
    //     userEmail : "HarshSharma301@gmail.com",
    //     password : "HarshSHARMA",
    //     name : "Harsh"
    // })

    // const user = await userRepo.getAll()
    // const tweetRepo = new TweetRepository()
    // const response1 = await tweetRepo.getAll();
    // // // console.log(response1)

    // const likeService = new LikeService()
    // await likeService.toggleLike(response1[0].id , 'Tweet' , user[0].id)


    
   

 
    
   

    
})

