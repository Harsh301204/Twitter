import { tweetService } from "../services/tweetservice.js";

const tweetservice = new tweetService()

export const createTweet = async (req , res) =>{
    try {
        const tweet = await tweetservice.create(req.body)
        return res.status(201).json({
            success : true,
            err : {},
            data : tweet,
            message : "Succesfully Created a new Tweet"

        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            err : error ,
            data : {},
            message : "Cannot create a tweet"
        })
    }
}

export const GetTweet = async (req , res) => {
    try {
        const tweet = await tweetservice.get(req.query.id)
        return res.status(201).json({
            success : true,
            err : {},
            data : tweet,
            message : "Succesfully fetched a new Tweet"

        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            err : error ,
            data : {},
            message : "Cannot get the tweet"
        })
    }
}