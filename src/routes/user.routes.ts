import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { authenticate } from '../middlewares/auth.middlewares';
import { requireRole } from '../middlewares/role.middleware';

const userRoutes = Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: get all users
 *     tags:
 *       - User
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       200:
 *         description: all user data
 */
userRoutes.get('/api/users', authenticate, requireRole(['ADMIN']), userController.getAllUsers);

/**
 * @swagger
 * /api/users/me:
 *   get:
 *     summary: get self data
 *     tags:
 *       - User
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       200:
 *         description: here is your data
 */
userRoutes.get('/api/users/me', authenticate, userController.getMe);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: get user by id
 *     tags:
 *       - User
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
 *         description: user found
 *       404:
 *         description: user not found
 */
userRoutes.get('/api/users/:id', authenticate, requireRole(['ADMIN']), userController.getUserById);

/**
 * @swagger
 * /api/users/me:
 *   put:
 *     summary: update user by id
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       200:
 *         description: user updated
 */
userRoutes.put('/api/users/me', authenticate, userController.updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: delete user by id
 *     tags:
 *       - User
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
 *         description: user deleted
 */
userRoutes.delete('/api/users/:id', authenticate, requireRole(['admin']), userController.deleteUser);

export default userRoutes;
