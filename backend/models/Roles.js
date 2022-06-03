const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
    role: String,
    
}, {timestamps: true})


module.exports = mongoose.model('Roles', roleSchema)