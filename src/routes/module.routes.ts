import { Router } from "express";
import * as moduleController from "../controllers/module.controller";
import { authenticate } from "../middlewares/auth.middlewares";
import { requireRole } from "../middlewares/role.middleware";
 
const moduleRoutes = Router();
 
moduleRoutes.post("/modules",authenticate,requireRole(["EDUCATOR"]), moduleController.createModule);
moduleRoutes.get("/modules",authenticate,requireRole(["STUDENT","EDUCATOR"]), moduleController.getAllModules);
moduleRoutes.get("/modules/:id",authenticate,requireRole(["STUDENT","EDUCATOR"]), moduleController.getModuleById);
moduleRoutes.put("/modules/:id",authenticate,requireRole(["EDUCATOR"]), moduleController.updateModule);
moduleRoutes.delete("/modules/:id",authenticate, requireRole(["EDUCATOR"]),moduleController.deleteModule);
 
export default moduleRoutes;