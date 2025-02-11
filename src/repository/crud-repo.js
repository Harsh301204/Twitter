class CrudRepository {
    constructor(model) {
        this.model = model
    }

    async create(data){
        try {
            const response = await this.model.create(data)
            return response
        } catch (error) {
            console.log("Something Went Wrong in Repo Layer")
            throw error
        }
    }

    async delete(id){
        try {
            const response = await this.model.findByIdAndDelete(id)
            return response
        } catch (error) {
            console.log("Something Went Wrong in Repo Layer")
            throw error
        }
    }

    async get(id){
        try {
            const response = await this.model.findById(id).lean()
            return response
        } catch (error) {
            console.log("Something Went Wrong in Repo Layer")
            throw error
        }
    }

    async getAll(){
        try {
            const response = await this.model.find()
            return response
        } catch (error) {
            console.log("Something Went Wrong in Repo Layer")
            throw error
        }
    }

    async update(id , data){
        try {
            const response = await this.model.findByIdAndUpdate(id , data , {new : true})
            return response
        } catch (error) {
            console.log("Something went wrong in repo layer")
            throw error
        }
    }
}

export default CrudRepository