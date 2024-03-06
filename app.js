import express from 'express';
import admisionRoutes from './src/routes/admision.routes.js';


const app = express();
app.use(express.json());

//Ruta inicial
app.get('/', (req, res) =>{
    res.send('Bienvenido!')
});


app.use('/api/admision', admisionRoutes);


export default app;