import { Router } from 'express';
import * as courseController from '../controllers/course.controller';
import { authenticate } from '../middlewares/auth.middlewares';
import { requireRole } from '../middlewares/role.middleware';

const courseRoutes = Router();

/**
 * @swagger
 * /courses:
 *   post:
 *     summary: create course
 *     tags:
 *       - Course
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       200:
 *         description: course created successfully
 */
courseRoutes.post('/api/courses', authenticate, requireRole(['educator', 'admin']), courseController.createCourse);

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: get all courses
 *     tags:
 *       - Course
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *          type: integer
 *         description: User Id
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       200:
 *         description: get all courses
 */
courseRoutes.get('/api/courses', courseController.getAllCourses);

/**
 * @swagger
 * /courses/{id}:
 *   get:
 *     summary: get course by id
 *     tags:
 *       - Course
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *          type: integer
 *         description: User Id
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       200:
 *         description: got course by id
 */
courseRoutes.get('/api/courses/:id', authenticate, courseController.getCourseById);

/**
 * @swagger
 * /courses/{id}:
 *   put:
 *     summary: update course
 *     tags:
 *       - Course
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *          type: integer
 *         description: course Id
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       200:
 *         description: course updated
 */
courseRoutes.put('/api/courses/:id', authenticate, requireRole(['educator', 'admin']), courseController.updateCourse);

/**
 * @swagger
 * /courses/{id}:
 *   delete:
 *     summary: delete course
 *     tags:
 *       - Course
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *          type: integer
 *         description: course Id
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       200:
 *         description: course deleted successfully
 */
courseRoutes.delete('/api/courses/:id', authenticate, requireRole(['admin']), courseController.deleteCourse);

export default courseRoutes;
