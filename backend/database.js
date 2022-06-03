const mongoose = require('mongoose')

const URI = 'mongodb://localhost/GYMapp'

mongoose.connect(URI)
    .then(db => console.log('The database connection is established'))
    .catch(err => console.log(err))

module.exports = mongoose