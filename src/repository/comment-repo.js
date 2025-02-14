import comment from "../models/comment.js"
import CrudRepository from "./crud-repo.js"


class CommentRepository extends CrudRepository {
    constructor(){
        super(comment)
    }
}

export default CommentRepository