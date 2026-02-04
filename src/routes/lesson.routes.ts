import { Router } from "express";
import * as lessonController from "../controllers/lesson.controller";
 
const lessonRoutes = Router();
 
lessonRoutes.post("/lessons", lessonController.createLesson);
lessonRoutes.get("/lessons", lessonController.getAllLessons);
lessonRoutes.get("/lessons/:id", lessonController.getLessonById);
lessonRoutes.put("/lessons/:id", lessonController.updateLesson);
lessonRoutes.delete("/lessons/:id", lessonController.deleteLesson);
 
export default lessonRoutes;