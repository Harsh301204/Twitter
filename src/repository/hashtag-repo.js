const hashtag = require('../models/hashtags')


class HashtagRepo {
    async create(data) {
        try {
            const tag = await hashtag.create(data)
            return tag
        } catch (error) {
            console.log("Something Went Wrong in Repo layer")
            throw error
        }
    }

    async bulkCreate(data) {
        try {
            const tags = await hashtag.insertMany(data)
            return tags
        } catch (error) {
            console.log("Something Went Wrong in Repo layer")
            throw error
        }
    }

    async get(id) {
        try {
            const tag = await hashtag.findById(id);
            return tag
        } catch (error) {
            console.log("Something Went Wrong in Repo layer")
            throw error
        }
    }

    async getAll(offset, limit) {
        try {
            const tag = await hashtag.find().skip(offset).limit(limit)
            return tag
        } catch (error) {
            console.log("Something Went Wrong in Repo layer")
            throw error
        }
    }

    async destroy(id) {
        try {
            const tag = await hashtag.findByIdAndDelete(id)
            return tag
        } catch (error) {
            console.log("Something Went Wrong in Repo layer")
            throw error
        }
    }

    async findByName(tittleList){
        try {
            const tags = await hashtag.find({
                tittle : tittleList
            })
            return tags
        } catch (error) {
            console.log("Something Went Wrong in Repo layer")
            throw error
        }

    }
}

module.exports = HashtagRepo