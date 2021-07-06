import usuarioNuevo from '../models/usuariooNuevo.js'

export const listarUsuariosNuevos = async () => {    
    const usuarios = await usuarioNuevo.find()   
    return { data: usuarios }
}

export const crearUsuarios = async (nuevo) => {
    const nuevoUsuario = await (new usuarioNuevo({...nuevo})).save()    
    return { data: nuevoUsuario  }
}

export const eliminarUsuario = async (usuario) => {	
	try {
		const eliminado = await User.findByIdAndRemove(usuario)
		return { data: eliminado }
	} catch (error) {
		return { data: 'User not found' }
	}
}
