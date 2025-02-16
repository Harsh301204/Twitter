import JWT from 'passport-jwt'
import User from '../models/user.js'

const jwtStrategy = JWT.Strategy
const extractJwt = JWT.ExtractJwt

const opts = {
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'Secret'
}

export const passportAuth = (passport) => {
    passport.use(new jwtStrategy(opts, async (jwt_payload, done) => {
        const user = await User.findById(jwt_payload.id)

        if (!user) {
            return done(null, false)
        } else {
            return done(null, user)
        }


    }))
}