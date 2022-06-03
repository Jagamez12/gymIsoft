const mongoose = require('mongoose')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true  
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        trim: true,
        require: true,
        unique: true
    },
    hashed_password: {
        type: String,
        require: true
    },
    role: {
        type: mongoose.Schema.ObjectId, ref:'Roles', 
        require: true,
        default: "a"

    }

}, {timestamp: true})

 
module.exports = mongoose.model('User', userSchema)