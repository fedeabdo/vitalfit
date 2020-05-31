const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RutinaSchema = new Schema({

    ejercicios: Array,
    fecha: Date

})


module.exports = mongoose.model('rutinas',RutinaSchema)