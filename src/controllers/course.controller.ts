import { Request, Response } from 'express';
import * as courseService from '../services/course.service';

// CREATE COURSES BY EDUCATOR ONLY
export const createCourse = async (req: Request, res: Response) => {
    try {
        const courseId = await courseService.createCourseService(req.body);
        res.status(201).json({
            message: 'Course created successfully',
            courseId,
        });
    } catch (error: any) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// GET ALL COURSES BY STUDENT AND EDUCATOR
export const getAllCourses = async (_req: Request, res: Response) => {
    try {
        const courses = await courseService.getAllCoursesService();
        res.status(200).json(courses);
    } catch (error: any) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// GET COURSE BY ID BY STUDENT AND EDUCATOR
export const getCourseById = async (req: Request, res: Response) => {
    try {
        const course = await courseService.getCourseByIdService(Number(req.params.id));

        if (!course) {
            return res.status(404).json({ message: 'course not found' });
        }

        res.status(200).json(course);
    } catch (error: any) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// UPDATE COURSE BY EDUCATOR ONLY
export const updateCourse = async (req: Request, res: Response) => {
    try {
        await courseService.updateCourseService(Number(req.params.id), req.body);

        res.status(200).json({
            message: 'Course updated successfully',
        });
    } catch (error: any) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// DELETE COURSE BY EDUCATOR ONLY
export const deleteCourse = async (req: Request, res: Response) => {
    try {
        await courseService.deleteCourseService(Number(req.params.id));

        res.status(200).json({
            message: 'Course deleted successfully',
        });
    } catch (error: any) {
        res.status(500).json({
            message: error.message,
        });
    }
};
