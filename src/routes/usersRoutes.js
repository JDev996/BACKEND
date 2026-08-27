import { Router } from "express";
import controllerUsers from "../controllers/controllerUser.js";

const userRoute = Router();

userRoute.post('/', controllerUsers.createUser);
userRoute.get('/', controllerUsers.traerDatos);
userRoute.get('/:id', controllerUsers.readUsersId);
userRoute.get('/:id', controllerUsers.deleteUser);
userRoute.get('/id', controllerUsers.updateUser);

export default userRoute;
