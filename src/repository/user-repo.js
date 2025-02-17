import User from '../models/user.js'
import CrudRepository from './crud-repo.js'

class UserRepository extends CrudRepository {
    constructor(){
        super(User)
    }

    async findBy(data){
        try {
            const response = await User.findOne(data)
            return response
        } catch (error) {
            console.log("Something went wrong in user repo")
            throw error
        }
    }
}

export default UserRepository