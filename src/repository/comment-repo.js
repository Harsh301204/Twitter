import comment from "../models/comment.js"
import CrudRepository from "./crud-repo.js"


class CommentRepository extends CrudRepository {
    constructor(){
        super(comment)
    }
    async find(id){
        try {
            const Comment = await comment.findById(id).populate({path : 'likes'})
            return Comment
        } catch (error) {
            console.log("Something Went Wrong in repo layer")
            throw error
        }
    }
}

export default CommentRepository