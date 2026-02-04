import { Router } from "express";
import * as moduleController from "../controllers/module.controller";
 
const moduleRoutes = Router();
 
moduleRoutes.post("/modules", moduleController.createModule);
moduleRoutes.get("/modules", moduleController.getAllModules);
moduleRoutes.get("/modules/:id", moduleController.getModuleById);
moduleRoutes.put("/modules/:id", moduleController.updateModule);
moduleRoutes.delete("/modules/:id", moduleController.deleteModule);
 
export default moduleRoutes;