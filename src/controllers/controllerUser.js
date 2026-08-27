import bcrypt from "bcryptjs";
import modelUser from "../models/modelUser.js";
import { model } from "mongoose";
import { response } from "express";

const controllerUsers = {
    createUser: async(requerimiento, respuesta)=>{
        try{
            const{nombre, correo, contraseña} = requerimiento.body;
            console.log(requerimiento.body);
            const protectedPassword = await bcrypt.hash(contraseña, 10);
            const newUser = new modelUser({
                nombre,
                correo,
                contraseña: protectedPassword,
            });
            console.log(newUser);
            const createdUser = await newUser.save();
            if (createdUser._id){ //._id en postman , al momento de almacenar los datos en mongodb, crea un id unico de ese usuario creado
                    respuesta.json({
                            res:'Usuario creado satisfactoriamente',
                            data: createdUser._id,
                    }); 
            } 
        } catch(error){
                respuesta.json({
                            res:'Error al crear el Usuario',
                            data: error,
                    }); 
            }
    },
    traerDatos: async(requerimiento, respuesta)=>{
        try{
                const usuariosEncontrados = await modelUser.find();
                        respuesta.json({
                                res:'El o los usuarios encontrados',
                                data: usuariosEncontrados,
                        }); 
        } catch(error){
                respuesta.json({
                            res:'Usuarios no encontrados',
                            data: error,
                    }); 
        }
    },

        readUsersId: async(requerimiento, respuesta)=>{
        try{
                const userFound = await modelUser.findById(
                        requerimiento.params.id
                );
                if(userFound._id){
                     respuesta.json({
                            result:'fine',
                            message: 'user found',
                            data: userFound,
                    });    
                }
        }catch(error){
                respuesta.json({
                        result: 'mistake',
                        message: 'An error ocurred while reading all users',
                        data: error,
                });
        }
    },
    deleteUser: async (requerimiento, respuesta) => {
    try {
        const userDelete = await modelUser.findByIdAndDelete(
            requerimiento.params.id
        );

        if (userDelete) {
            respuesta.json({
                result: 'fine',
                message: 'User deleted successfully',
                data: null,
            });
        }
    } catch (error) {
        respuesta.json({
            result: 'mistake',
            message: 'An error occurred while deleting the user',
            data: error,
        });
                }
        },
    
    updateUser: async (requerimiento, respuesta)=>{
        try{
                const userUpdate = await modelUser.findByIdAndUpdate(
                        requerimiento.params.id,
                        requerimiento.body
                );
                if(userUpdate._id){
                        respuesta.json({
                                result: 'fine',
                                message: 'user update',
                                data: error,
                        })
                }
        } catch(error){
                respuesta.json({
                result: 'mistake',
                message: 'An error occurred while updating the user',
                data: error,
                });
        }
    }

}
export default controllerUsers;