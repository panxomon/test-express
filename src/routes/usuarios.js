
import Router from 'express'
import usuarios from '../controllers/usuarios.js'

const rutasUsuarios = Router()

rutasUsuarios.post('/', usuarios.POST)
rutasUsuarios.get('/', usuarios.GET)

export default rutasUsuarios  

