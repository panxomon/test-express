import mongoose from 'mongoose'

const usuarioNuevo = new mongoose.Schema({
    nombre: {type: String, required: true },
    email: {type: String, required: true},
    instagram: {type: String, required: true}
    // foto: {data: Buffer, contentType: String}
})

export default mongoose.model('usuarioNuevo', usuarioNuevo)