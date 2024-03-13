import * as messages from "./Art/Messages.js";


import express from 'express';
const app = express();
app.use(express.json());

//crear roles por defecto
import { createRoles } from './src/libs/initialSetup.js';
createRoles();

//Ruta inicial
app.get('/', (req, res) =>{
    res.send(messages.Welcome)
});

/* 
 ######                             
 #     # #    # #####   ##    ####  
 #     # #    #   #    #  #  #      
 ######  #    #   #   #    #  ####  
 #   #   #    #   #   ######      # 
 #    #  #    #   #   #    # #    # 
 #     #  ####    #   #    #  ####  
                                    
*/
import admisionRoutes from './src/routes/admision.routes.js';
import authRoutes from './src/routes/auth.routes.js';
import ofertaRoutes from './src/routes/oferta.routes.js'
app.use('/api/admision', admisionRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/oferta',ofertaRoutes);

export default app;