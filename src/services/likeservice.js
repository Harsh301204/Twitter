import { CommentRepository, LikeRepository , TweetRepository } from "../repository/index.js";

class LikeService {

    constructor() {
        this.likeRepository = new LikeRepository()
        this.tweetRepository = new TweetRepository()
        this.commentRepository = new CommentRepository()
    }

    async toggleLike(modelId, modelType, userId) {
        if (modelType == 'Tweet') {
            var likeable = await this.tweetRepository.find(modelId)    // We will fetch the following Tweet
            console.log(likeable)
            // likeable.populate({path : 'likes'})
        
        } else if(modelType == 'Comment') {
            var likeable = await this.commentRepository.find(modelId)
        } else {
            throw new Error('Unknown Model Type')
        }

        const exists = await this.likeRepository.findByUserAndLikeable({
            user: userId,
            onModel : modelType,
            likeable : modelId
        })

        if(exists) {
            likeable.likes.pull(exists.id)
            await likeable.save()
            await exists.remove()
            var isRemoved = true
        } else {
            const newLike = await this.likeRepository.create({
                user : userId,
                likeable : modelId,
                onModel : modelType
            })
            likeable.likes.push(newLike)
            await likeable.save()
            var isRemoved = false
        }

        return isRemoved
    }

}

export default LikeService