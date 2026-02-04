import * as lessonModel from '../models/lesson.model'
 

export const createLessonService = async (data: {
  title: string,
  description: string,
}) => {
  const { title,description } = data;
 
  const lessonId = await lessonModel.createLesson(title,description);
 
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
 

export const updateLessonService = async (
  id: number,
  data: { title: string,
  description: string }
) => {
  await lessonModel.updateLesson(id, data.title, data.description);
};
 

export const deleteLessonService = async (id: number) => {
  await lessonModel.deleteLesson(id);
};