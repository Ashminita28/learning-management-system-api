import { Router } from 'express';
import * as enrollmentController from '../controllers/enrollment.controller';
import { authenticate } from '../middlewares/auth.middlewares';
import { requireRole } from '../middlewares/role.middleware';

const enrollmentRoutes = Router();

enrollmentRoutes.post('/enrollments', authenticate, requireRole(['STUDENT']), enrollmentController.createEnrollment);
enrollmentRoutes.get('/enrollments', authenticate, requireRole(['STUDENT']), enrollmentController.getAllEnrollments);
enrollmentRoutes.get('/enrollments/:id', authenticate, requireRole(['STUDENT']), enrollmentController.getEnrollmentById);
enrollmentRoutes.put('/enrollments/:id', authenticate, requireRole(['STUDENT']), enrollmentController.updateEnrollment);
enrollmentRoutes.delete('/enrollments/:id', authenticate, requireRole(['STUDENT']), enrollmentController.deleteEnrollment);

export default enrollmentRoutes;
