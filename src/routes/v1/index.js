import express from 'express'
import {createTweet} from '../../controller/tweet-controller.js'
const router = express.Router()

router.post('/createtweet' , createTweet)

export default router