import app from '../app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import * as messages from '../Art/Messages.js'
import cors from cors
dotenv.config();

console.log(messages.Welcome);

const port = process.env.PORT || 3000; 
app.listen(port, ()=> {
  console.log(messages.serverListendSimple, port);
});

/*
app.use(cors(
  {
    origin: "*",
    methods: ["POST", "GET"],
    credentials: true
  }
))
*/

// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(messages.bdConnectedSimple);
  })
  .catch((error) => {
    console.error(messages.bdErrorSimple, error);
  });

  