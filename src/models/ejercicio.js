//defino la  'tabla' el esquema para la bdd

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EjercicioSchema = new Schema({

    tipos: Array,
    nombre: String,
    velocidad_ejecucion: String,
    series: Number,//aca no sera mejor crear un objeto serie que tenga adentro las rep por cada serie
    reps_por_serie: Number,
    intensidad: String,
    kilos: String,
    fecha_realizado: Date

})



module.exports = mongoose.model('ejercicios',EjercicioSchema)