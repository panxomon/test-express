
import rutasUsuarios from './usuarios.js' 

const setRutas = (app) =>  {
  app.use('/api/usuarios',  rutasUsuarios); 
}

export default setRutas 

