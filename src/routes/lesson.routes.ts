import { Router } from 'express';
import * as lessonController from '../controllers/lesson.controller';
import { authenticate } from '../middlewares/auth.middlewares';
import { requireRole } from '../middlewares/role.middleware';

const lessonRoutes = Router();

/**
 * @swagger
 * /lessons:
 *   post:
 *     summary: create lesson
 *     tags:
 *       - Lesson
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               moduleId:
 *                 type: number
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: lesson created successfully
 */
lessonRoutes.post('/api/lessons', authenticate, requireRole(['educator', 'admin']), lessonController.createLesson);

/**
 * @swagger
 * /lessons:
 *   get:
 *     summary: get lesson
 *     tags:
 *       - Lesson
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       200:
 *         description: get all lessons
 */
lessonRoutes.get('/api/lessons', authenticate, requireRole(['student', 'educator', 'admin']), lessonController.getAllLessons);

/**
 * @swagger
 * /lessons/{id}:
 *   get:
 *     summary: get lesson by id
 *     tags:
 *       - Lesson
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *          type: integer
 *         description: User Id
 *     responses:
 *       200:
 *         description: lesson by id is here
 */
lessonRoutes.get('/api/lessons/:id', authenticate, requireRole(['student', 'educator', 'admin']), lessonController.getLessonById);

/**
 * @swagger
 * /lessons/{id}:
 *   put:
 *     summary: update lesson
 *     tags:
 *       - Lesson
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *          type: integer
 *         description: User Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               moduleId:
 *                 type: number
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: lesson updated
 */
lessonRoutes.put('/api/lessons/:id', authenticate, requireRole(['educator', 'admin']), lessonController.updateLesson);

/**
 * @swagger
 * /lessons/{id}:
 *   delete:
 *     summary: delete lesson
 *     tags:
 *       - Lesson
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *          type: integer
 *         description: module Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               moduleId:
 *                 type: number
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: lesson deleted success fully
 */
lessonRoutes.delete('/api/lessons/:id', authenticate, requireRole(['educator', 'admin']), lessonController.deleteLesson);

export default lessonRoutes;
