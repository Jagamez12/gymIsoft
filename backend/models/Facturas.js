const mongoose = require('mongoose')

const Schema = mongoose.Schema

const facturaSchema = Schema({
      propietario: {
          type: mongoose.Schema.ObjectId,
          ref: 'User',
          require: true
      },
      pago_estado: {
          type: Boolean,
          require: true,
          default: true,
      },
      fecha_inicio:{ 
          type: Date,
          require: true,
          default: Date.now
      },
      fecha_fin: {
          type: Date,  
          require: true,
          default: Date.now + 2628000000
      },
      

      
})


module.exports = mongoose.model('Factura', facturaSchema)