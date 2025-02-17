import CommentService from "../services/commentservice.js";

const commentService = new CommentService()

const createComment = async (req , res) => {
    try {
        console.log(req.body.content)
        const comment = await commentService.create(req.query.modelType , req.query.modelId , req.user.id , req.body.content)
        return res.status(201).json({
            success : true,
            data : comment,
            err : {},
            message : "Successfully added the Comment"
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            data : {},
            err : error,
            message : "error while commenting"
        })
    }
}

export default createComment