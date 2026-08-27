import { Schema, model } from "mongoose";
const esquemadeUsuario = new Schema({
    nombre: {
        type: String, required:true
    },
    correo: {
        type: String, required:true
    },
    contraseña: {
        type: String, required:true
    },
});

export default model('usuario', esquemadeUsuario);