import LikeService from "../services/likeservice.js";


const likeService = new LikeService()

export const LikeOnPost = async (req , res) => {
    try {
    
        const data = await likeService.toggleLike(req.query.modelId , req.query.modelType , req.user.id)
        return res.status(200).json({
            success : true,
            error : {},
            message : "liked on a Tweet",
            data : data
        })
    } catch (error) {
        console.log("something went wrong in Like Controller")
        throw error
    }
}