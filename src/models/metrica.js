
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MetricaSchema = new Schema({

    nombre: String,
    valor: Number

})


module.exports = mongoose.model('metricas',MetricaSchema)