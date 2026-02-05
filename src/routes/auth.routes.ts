import { Router } from 'express';

import { login, register, logout } from '../controllers/auth.controller';

const authRoutes = Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 */
authRoutes.post('/auth/login', login);
authRoutes.post('/auth/register', register);
authRoutes.post('/auth/login', logout);
export default authRoutes;
