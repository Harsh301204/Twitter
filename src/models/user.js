import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jsonWebToken from 'jsonwebtoken'

const SALT = bcrypt.genSaltSync(10)
const UserSchema = new mongoose.Schema({

    userEmail : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true
    },

    name : {
        type : String,
        required : true
    }

} , {timestamps : true})


UserSchema.pre('save' , function(next){
    const hash = bcrypt.hashSync(this.password , SALT)
    this.password = hash
    next()
})

UserSchema.methods.comparePassword = function compare(password){
    return bcrypt.compareSync(password , this.password)
}

UserSchema.methods.generateJWT = function generate() {
    return jsonWebToken.sign({
        id : this._id,
        email : this.userEmail
    } , 'Secret' , {
        expiresIn : '1h'
    } )
}

const User = mongoose.model('User' , UserSchema)
export default User