const express = require('express')
const app = express()
const morgan = require('morgan')
const { mongoose } =  require('./database')


app.set('port', process.env.PORT || 3000)



// Middleware

app.use(morgan('dev'))
app.use(express.json())


// Routes 



// Static Files


// Servidor iniciado

app.listen(app.get('port'), ()=> {
    console.log('Server ON!')
})

