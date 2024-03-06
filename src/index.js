import app from '../app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
app.listen(3000);

console.log('Servidor escuchando en el puerto', 3000);

// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
