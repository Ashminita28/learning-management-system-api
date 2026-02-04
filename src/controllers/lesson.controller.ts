import { Request, Response } from "express";
import * as lessonService from "../services/lesson.service";
 

export const createLesson = async (req: Request, res: Response) => {
  try {
    const lessonId = await lessonService.createLessonService(req.body);
    res.status(201).json({
      message: "lesson created successfully",
      lessonId,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
 

export const getAllLessons = async (_req: Request, res: Response) => {
  try {
    const lessons = await lessonService.getAllLessonsService();
    res.status(200).json(lessons);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
 

export const getLessonById = async (req: Request, res: Response) => {
  try {
    const lesson = await lessonService.getLessonByIdService(
      Number(req.params.id)
    );
 
    if (!lesson) {
      return res.status(404).json({ message: "lesson not found" });
    }
 
    res.status(200).json(lesson);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
 

export const updateLesson = async (req: Request, res: Response) => {
  try {
    await lessonService.updateLessonService(
      Number(req.params.id),
      req.body
    );
 
    res.status(200).json({
      message: "lesson updated successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
 

export const deleteLesson = async (req: Request, res: Response) => {
  try {
    await lessonService.deleteLessonService(Number(req.params.id));
 
    res.status(200).json({
      message: "lesson deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
}