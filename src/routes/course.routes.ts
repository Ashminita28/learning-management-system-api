import { Router } from "express";
import * as courseController from "../controllers/course.controller";
import { authenticate } from "../middlewares/auth.middlewares";
import { requireRole } from "../middlewares/role.middleware";
 
const courseRoutes = Router();
 
courseRoutes.post("/courses", authenticate,requireRole(["EDUCATOR"]), courseController.createCourse);
courseRoutes.get("/courses", authenticate,requireRole(["STUDENT","EDUCATOR"]),courseController.getAllCourses);
courseRoutes.get("/courses/:id", authenticate,requireRole(["STUDENT","EDUCATOR"]),courseController.getCourseById);
courseRoutes.put("/courses/:id", authenticate,requireRole(["EDUCATOR"]),courseController.updateCourse);
courseRoutes.delete("/courses/:id", authenticate,requireRole(["EDUCATOR"]),courseController.deleteCourse);
 
export default courseRoutes;