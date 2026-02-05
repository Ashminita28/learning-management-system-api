import { Router } from 'express';
import * as enrollmentController from '../controllers/enrollment.controller';
import { authenticate } from '../middlewares/auth.middlewares';
import { requireRole } from '../middlewares/role.middleware';

const enrollmentRoutes = Router();

/**
 * @swagger
 * /enrollments:
 *   post:
 *     summary: create enrollment
 *     tags:
 *       - Enrollment
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: number
 *               courseId:
 *                 type: number
 *     responses:
 *       200:
 *         description: enrollment created successfully
 */
enrollmentRoutes.post('/api/enrollments', authenticate, requireRole(['student']), enrollmentController.createEnrollment);

/**
 * @swagger
 * /enrollments:
 *   get:
 *     summary: get all enrollments
 *     tags:
 *       - Enrollment
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       200:
 *         description: all enrollments
 */
enrollmentRoutes.get('/api/enrollments', authenticate, requireRole(['admin']), enrollmentController.getAllEnrollments);

/**
 * @swagger
 * /enrollments/{id}:
 *   get:
 *     summary: get enrollment by id
 *     tags:
 *       - Enrollment
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *          type: integer
 *         description: user Id
 *     responses:
 *       200:
 *         description:  enrollment by id
 */
enrollmentRoutes.get('/api/enrollments/:id', authenticate, requireRole(['admin']), enrollmentController.getEnrollmentById);

/**
 * @swagger
 * /enrollments/{id}:
 *   delete:
 *     summary: delete enrollment
 *     tags:
 *       - Enrollment
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *          type: integer
 *         description: user Id
 *     responses:
 *       200:
 *         description: enrollment deleted
 */
enrollmentRoutes.delete('/api/enrollments/:id', authenticate, requireRole(['admin']), enrollmentController.deleteEnrollment);

export default enrollmentRoutes;
