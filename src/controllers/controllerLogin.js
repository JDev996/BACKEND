import modelUser from "../models/modelUser.js";
import { generateToken, verificarToken } from "../helps/funciones.js";
import bcrypt from "bcryptjs";

const controllerLogin = {
    iniciarSesion: async(requerimiento, respuesta)=>{
        try{
            const{username, password}=requerimiento.body;
            const userFound = await modelUser.findOne({
                email: username,
            });

            const validatePassword = await bcrypt.compare(password, userFound.password);
            
        } catch(error){

        }
    }
}

export default controllerLogin;