//defino la  'tabla' el esquema para la bdd

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({

    usuario: String,
    password: String,
    nombre: String,
    nacimiento: String,
    nro_contacto: Number,
    mail: String,
    ejercicios: Array,
    metricas_iniciales: Array,
    metricas_avance: Array,
    metricas_objetivo: Array 

});


module.exports = mongoose.model('clientes',ClienteSchema)//se almacenan en 'clientes'