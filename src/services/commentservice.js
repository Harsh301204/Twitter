import { CommentRepository , TweetRepository } from "../repository/index.js";

class CommentService {
    constructor(){
        this.commentRepo = new CommentRepository()
        this.tweetRepo = new TweetRepository()
    }

    async create(modelType , modelId , userId , content){
        if(modelType == 'Tweet') {
            var commentable = await this.tweetRepo.get(modelId)
        } else if(modelType == 'Comment') {
            var commentable = await this.commentRepo.get(modelId)
        } else {
            throw new error('Model Not Found')
        }

        console.log(commentable)
        const comment = await this.commentRepo.create({
            content : content,
            user : userId,
            comments : [],
            onModel : modelType,
            commentable : modelId
        })

        console.log(comment)
        commentable.comments.push(comment);
        await commentable.save()

        return comment
    }

}

export default CommentService