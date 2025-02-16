import userService from "../services/userService.js";

const userservice = new userService()

export const SignUp = async (req , res) => {
    try {
        const user = await userservice.signUp({
            userEmail : req.body.userEmail,
            password : req.body.password,
            name : req.body.name
        })
        return res.status(201).json({
            message : "Succesfully Signed Up",
            error : {},
            success : true,
            data : user
        })
    } catch (error) {
        return res.status(500).json({
            message : "Something went wrong",
            error : error,
            success : false,
            data : {}
        })
    }
}

export const login = async (req , res) => {
    try {
        const user = await userservice.signIn(req.body)
        return res.status(200).json({
            success : true,
            data : user,
            err : {},
            message : "Successfully Logged In"
        })


    } catch (error) {
        return res.status(500).json({
            data : {},
            success : false,
            message : "Something went wrong",
            err : error
        })
    }
}

