
import {dispatcher } from '../config/dispatcher.js'
import { listarUsuariosNuevos, crearUsuarios, eliminarUsuario } from '../workflows/usuarios'

export default{    
    GET: (req, res) =>  dispatcher(res, listarUsuariosNuevos)() ,
    POST: (req, res) => dispatcher(res, crearUsuarios)(req.body),
    delete: (req, res) => dispatcher(res, eliminarUsuario )(req.params.instagram)
}


