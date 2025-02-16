import { UserRepository } from "../repository/index.js";


class userService {
    constructor() {
        this.userRepo = new UserRepository()
    }

    async signUp(data) {
        try {
            const user = await this.userRepo.create(data)
            return user
        } catch (error) {
            console.log("Something went wrong in User Service")
            throw error
        }

    }

    async findByEmail(userEmail) {
        try {
            const user = await this.userRepo.findBy({ userEmail })
            return user
        } catch (error) {
            console.log("Something went wrong in User Service")
            throw error
        }
    }

    async signIn(data) {
        try {
            const user = await this.findByEmail(data.userEmail)

            if (!user) {
                throw ({ message: "No User Found" })
            }

            if (!user.comparePassword(data.password)) {
                throw ({ message: "Incorrect Password" })
            }

            const token = user.generateJWT()
            return token


        } catch (error) {
            console.log("Something went wrong in User Service")
            throw error
        }
    }
}

export default userService