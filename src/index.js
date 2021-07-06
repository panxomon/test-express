import express from 'express'
import setRutas from './routes/index.js'
import conexion from './config/db.js'
import bodyParser from 'body-parser'

const app = express();    
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

setRutas(app)

console.log ('Iniciando servidor ....')
app.listen(port, err => {
    if (err){
        console.log('Error app listen')
        process.exit(1)
    }

    conexion()
})


