// const mongoose = require('mongoose')
import mongoose from 'mongoose'


export const connect = async ()=> {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://localhost/twitter_dev')
} 


// module.exports = connect