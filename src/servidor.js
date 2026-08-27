import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import userRoute from './routes/usersRoutes.js';

const servidor = express();
servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.use('/usuarios', userRoute);
servidor.get('/',(solicitud, respuesta)=>{
    respuesta.status(404).send("no encontrado");
});

export default servidor;