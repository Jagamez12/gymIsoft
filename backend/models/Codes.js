const mongoose = require('mongoose')

const codeSchema = mongoose.Schema({
    code: {
        type: String,
        require: true,
        maxLength: 6,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    timeActivation: {
        type: Date.now()
    },
    timeExpiration: {
        type: Date,
        require: true
    },
    tipo: {
        type: String,
        require: true,
        maxLength: 15
    },
    userID: {
        type: mongoose.Schema.ObjectId, 
        ref: 'User'
    }

})


module.exports = mongoose.model('Codes', codeSchema)