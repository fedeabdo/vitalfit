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
    ejercicios: String, //hay que cambiar esto no se como poner un array de ejercicios
    metricas_iniciales: String,//en realidad no es string
    metricas_avance: String,//en realidad es un array de metricas
    metricas_objetivo: String //en realidad es un array de metricas
});


module.exports = mongoose.model('clientes',ClienteSchema)//se almacenan en 'personas'