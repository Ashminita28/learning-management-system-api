import { Router } from 'express';
import * as moduleController from '../controllers/module.controller';
import { authenticate } from '../middlewares/auth.middlewares';
import { requireRole } from '../middlewares/role.middleware';

const moduleRoutes = Router();

/**
 * @swagger
 * /modules:
 *   post:
 *     summary: create module
 *     tags:
 *       - Modules
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               courseId:
 *                 type: number
 *               title:
 *                 type: string
 *     responses:
 *       200:
 *         description: module created successfully
 */
moduleRoutes.post('/api/modules', authenticate, requireRole(['educator', 'admin']), moduleController.createModule);

/**
 * @swagger
 * /modules:
 *   get:
 *     summary: get all modules
 *     tags:
 *       - Modules
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       200:
 *         description: course created successfully
 */
moduleRoutes.get('/api/modules', authenticate, requireRole(['student', 'educator', 'admin']), moduleController.getAllModules);

/**
 * @swagger
 * /modules/{id}:
 *   get:
 *     summary: get module by id
 *     tags:
 *       - Modules
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *          type: integer
 *         description: course Id
 *     responses:
 *       200:
 *         description: got module by id
 */
moduleRoutes.get('/api/modules/:id', authenticate, requireRole(['student', 'educator', 'admin']), moduleController.getModuleById);

/**
 * @swagger
 * /modules/{id}:
 *   put:
 *     summary: update module
 *     tags:
 *       - Modules
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *          type: integer
 *         description: course Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               courseId:
 *                 type: number
 *               title:
 *                 type: string
 *     responses:
 *       200:
 *         description: updated module successfully
 */
moduleRoutes.put('/api/modules/:id', authenticate, requireRole(['educator', 'admin']), moduleController.updateModule);

/**
 * @swagger
 * /modules/{id}:
 *   delete:
 *     summary: delete module
 *     tags:
 *       - Modules
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *          type: integer
 *         description: course Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               courseId:
 *                 type: number
 *               title:
 *                 type: string
 *     responses:
 *       200:
 *         description: deleted module successfully!!
 */
moduleRoutes.delete('/api/modules/:id', authenticate, requireRole(['admin']), moduleController.deleteModule);

export default moduleRoutes;
