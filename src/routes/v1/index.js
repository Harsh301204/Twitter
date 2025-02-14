import express from 'express'
import {createTweet} from '../../controller/tweet-controller.js'
import { LikeOnPost } from '../../controller/like-controller.js'
const router = express.Router()

router.post('/createtweet' , createTweet)
router.post('/likes' , LikeOnPost)

export default router