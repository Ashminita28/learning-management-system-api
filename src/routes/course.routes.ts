import { Router } from "express";
import * as courseController from "../controllers/course.controller";
 
const courseRoutes = Router();
 
courseRoutes.post("/courses", courseController.createCourse);
courseRoutes.get("/courses", courseController.getAllCourses);
courseRoutes.get("/courses/:id", courseController.getCourseById);
courseRoutes.put("/courses/:id", courseController.updateCourse);
courseRoutes.delete("/courses/:id", courseController.deleteCourse);
 
export default courseRoutes;