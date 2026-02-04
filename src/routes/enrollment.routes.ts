import { Router } from "express";
import * as enrollmentController from "../controllers/enrollment.controller";
 
const enrollmentRoutes = Router();
 
enrollmentRoutes.post("/enrollments", enrollmentController.createEnrollment);
enrollmentRoutes.get("/enrollments", enrollmentController.getAllEnrollments);
enrollmentRoutes.get("/enrollments/:id", enrollmentController.getEnrollmentById);
enrollmentRoutes.put("/enrollments/:id", enrollmentController.updateEnrollment);
enrollmentRoutes.delete("/enrollments/:id", enrollmentController.deleteEnrollment);
 
export default enrollmentRoutes;