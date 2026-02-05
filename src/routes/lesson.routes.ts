import { Router } from "express";
import * as lessonController from "../controllers/lesson.controller";
import { authenticate } from "../middlewares/auth.middlewares";
import { requireRole } from "../middlewares/role.middleware";
 
const lessonRoutes = Router();
 
lessonRoutes.post("/lessons",authenticate,requireRole(["EDUCATOR"]), lessonController.createLesson);
lessonRoutes.get("/lessons",authenticate,requireRole(["STUDENT","EDUCATOR"]), lessonController.getAllLessons);
lessonRoutes.get("/lessons/:id",authenticate,requireRole(["STUDENT","EDUCATOR"]), lessonController.getLessonById);
lessonRoutes.put("/lessons/:id",authenticate, requireRole(["EDUCATOR"]),lessonController.updateLesson);
lessonRoutes.delete("/lessons/:id",authenticate,requireRole(["EDUCATOR"]), lessonController.deleteLesson);
 
export default lessonRoutes;