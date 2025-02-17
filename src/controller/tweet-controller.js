import { tweetService } from "../services/tweetservice.js";
import upload from "../config/upload-s3-config.js";


const singleUploader = upload.single('image')


const tweetservice = new tweetService()

export const createTweet = async (req, res) => {
    try {
        singleUploader(req, res, async function (err, data) {
            if (err) {
                return res.status(500).json({
                    message: "Something went wrong while uploading image",
                    error: err
                })
            }
            const payload = req.body
            payload.image = req.file.location
            // console.log('Image URL is ', req.file)
            const tweet = await tweetservice.create(payload)
            return res.status(201).json({
                success: true,
                err: {},
                data: tweet,
                message: "Succesfully Created a new Tweet"

            })

        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            err: error,
            data: {},
            message: "Cannot create a tweet"
        })
    }
}

export const GetTweet = async (req, res) => {
    try {
        const tweet = await tweetservice.get(req.query.id)
        return res.status(201).json({
            success: true,
            err: {},
            data: tweet,
            message: "Succesfully fetched a new Tweet"

        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            err: error,
            data: {},
            message: "Cannot get the tweet"
        })
    }
}