import express from 'express'
import {createTweet, GetTweet} from '../../controller/tweet-controller.js'
import { LikeOnPost } from '../../controller/like-controller.js'
import createComment from '../../controller/comment-controller.js'
import {SignUp,  login } from '../../controller/auth-controller.js'
import { authenticate } from '../../middlewares/authenticate.js'


const router = express.Router()

router.post('/createtweet' , createTweet)
router.post('/likes' , LikeOnPost)
router.post('/comment' , authenticate, createComment)
router.get('/Tweet' , GetTweet)
router.post('/SignUp' , SignUp)
router.post('/login' , login)

export default router