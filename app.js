import * as messages from "./Art/Messages.js";
import cors from 'cors';
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


app.use(cors(
  {
    origin: "*",
    methods: ["POST", "GET"],
    credentials: true
  }
))


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
import profesorRoutes from "./src/routes/profesor.routes.js"
app.use('/api/admision', admisionRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/oferta',ofertaRoutes);
app.use('/api/profesores',profesorRoutes);


export default app;