import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { authenticate } from "../middlewares/auth.middlewares";
import { requireRole } from "../middlewares/role.middleware";
 
const userRoutes = Router();
 
// userRoutes.post("/users", userController.createUser);
userRoutes.get("/users", authenticate,requireRole(["ADMIN"]), userController.getAllUsers);
userRoutes.get("/users/me",authenticate,userController.getMe)
userRoutes.get("/users/:id", authenticate,userController.getUserById);
userRoutes.put("/users/:id", authenticate,userController.updateUser);
userRoutes.delete("/users/:id", authenticate,userController.deleteUser);
 
export default userRoutes;