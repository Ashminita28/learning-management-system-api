import * as lessonModel from '../models/lesson.model';

export const createLessonService = async (data: { moduleId: number; title: string; content: string }) => {
    const { moduleId, title, content } = data;

    const lessonId = await lessonModel.createLesson(moduleId, title, content);

    return lessonId;
};

export const getAllLessonsService = async () => {
    const lessons = await lessonModel.getAllLessons();
    return lessons;
};

export const getLessonByIdService = async (id: number) => {
    const lesson = await lessonModel.getLessonById(id);
    return lesson;
};

export const updateLessonService = async (id: number, data: { moduleId: number; title: string; content: string }) => {
    await lessonModel.updateLesson(id, data.moduleId, data.title, data.content);
};

export const deleteLessonService = async (id: number) => {
    await lessonModel.deleteLesson(id);
};
