import express from 'express';
import cors from 'cors';

//importamos la conexion a la DB
import db from './database/db.js';

//importamos nuestro enrutador
import blogRoutes from './routes/routes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/blogs', blogRoutes);

try{
    await db.authenticate();
    console.log('Conexión a la base de datos exitosa!');
}
catch(error){
    console.log(error);
}
app.get('/', (req, res) => {
    res.send('Hola Mundo');
})

app.listen(8000, () => {
    console.log('Servidor corriendo en el puerto 8000');
})