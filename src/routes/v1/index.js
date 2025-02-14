import express from 'express'
import {createTweet, GetTweet} from '../../controller/tweet-controller.js'
import { LikeOnPost } from '../../controller/like-controller.js'
import createComment from '../../controller/comment-controller.js'

const router = express.Router()

router.post('/createtweet' , createTweet)
router.post('/likes' , LikeOnPost)
router.post('/comment' , createComment)
router.get('/Tweet' , GetTweet)

export default router