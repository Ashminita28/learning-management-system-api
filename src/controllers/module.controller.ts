import { Request, Response } from 'express';
import * as moduleService from '../services/module.service';

// CREATE MODULE BY EDUCATOR
export const createModule = async (req: Request, res: Response) => {
    try {
        const moduleId = await moduleService.createModuleService(req.body);
        res.status(201).json({
            message: 'module created successfully',
            moduleId,
        });
    } catch (error: any) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// GET ALL MODULES BY STUDENT AND EDUCATOR
export const getAllModules = async (_req: Request, res: Response) => {
    try {
        const modules = await moduleService.getAllModulesService();
        res.status(200).json(modules);
    } catch (error: any) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// GET MODULE BY ID EDUCATOR AND STUDENT
export const getModuleById = async (req: Request, res: Response) => {
    try {
        const module = await moduleService.getModuleByIdService(Number(req.params.id));

        if (!module) {
            return res.status(404).json({ message: 'module not found' });
        }

        res.status(200).json(module);
    } catch (error: any) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// UPDATE MODULE BY EDUCATOR
export const updateModule = async (req: Request, res: Response) => {
    try {
        await moduleService.updateModuleService(Number(req.params.id), req.body);

        res.status(200).json({
            message: 'module updated successfully',
        });
    } catch (error: any) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// DELETE MODULE BY EDUCATOR
export const deleteModule = async (req: Request, res: Response) => {
    try {
        await moduleService.deleteModuleService(Number(req.params.id));

        res.status(200).json({
            message: 'module deleted successfully',
        });
    } catch (error: any) {
        res.status(500).json({
            message: error.message,
        });
    }
};
