//importar modelos
import User from "../models/User.js";
import Role from "../models/Role.js";

//importar controlador de token
import * as token from "../controllers/token.controller.js"

//importar mensajes
 import * as messages from "../../Art/Messages.js"

export const signUp = async (req,res) => {
    try{
         //extraer datos de peticion
    const {username,email,password} = req.body;
    //crear nuevo usuario
    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    });

    if(req.body.roles){
        const foundRoles = await Role.find({ name: {$in: req.body.roles} });
        newUser.roles = foundRoles.map(role => role.id);
    } else {
        const role = await Role.findOne({ name: "customer"});
        newUser.roles = [role.id];
    }

    const saveUser = await newUser.save();
    console.log(saveUser);

    //responder
    res.json(messages.savedUserSimple)
    } catch (error) {
        console.error(error);

    }   
}

export const signIn = async (req,res) => {
    //buscar usuario por correo
    
}