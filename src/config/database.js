const mongoose = require('mongoose')


const connect = async ()=> {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://localhost/twitter_dev')
} 


module.exports = connect