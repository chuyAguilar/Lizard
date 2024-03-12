import express from 'express';
import admisionRoutes from './src/routes/admision.routes.js';
import authRoutes from './src/routes/auth.routes.js';
import * as messages from "./Art/Messages.js";


const app = express();
app.use(express.json());

//crear roles por defecto
import { createRoles } from './src/libs/initialSetup.js';
createRoles();

//Ruta inicial
app.get('/', (req, res) =>{
    res.send(messages.Welcome)
});


app.use('/api/admision', admisionRoutes);
app.use('/api/auth',authRoutes);


export default app;