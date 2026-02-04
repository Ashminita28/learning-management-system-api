import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { authenticate } from "../middlewares/auth.middlewares";
 
const userRoutes = Router();
 
userRoutes.post("/users", userController.createUser);
userRoutes.get("/users", authenticate,userController.getAllUsers);
userRoutes.get("/users/:id", authenticate,userController.getUserById);
userRoutes.put("/users/:id", authenticate,userController.updateUser);
userRoutes.delete("/users/:id", authenticate,userController.deleteUser);
 
export default userRoutes;