import { Request, Response } from 'express';

import * as authService from '../services/auth.services';
import * as userService from '../services/user.service';

// LOGIN
export const login = async (req: Request, res: Response) => {
    try {
        const tokenData = await authService.loginService(req.body);
        res.status(200).json({
            message: 'Login successfull!!',
            ...tokenData,
        });
    } catch (error: any) {
        res.status(401).json({
            message: error.message,
        });
    }
};

//REGISTER
export const register = async (req: Request, res: Response) => {
    try {
        const userId = await userService.createUserService(req.body);
        res.status(200).json({
            message: 'Registered successfully',
            userId,
        });
    } catch (error: any) {
        res.status(401).json({
            message: error.message,
        });
    }
};
