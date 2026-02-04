import * as courseModel from '../models/course.model'
 

export const createCourseService = async (data: {
  title: string,
  description: string,
}) => {
  const { title,description } = data;
 
  const courseId = await courseModel.createCourse(title,description);
 
  return courseId;
};
 

export const getAllCoursesService = async () => {
  const courses = await courseModel.getAllCourses();
  return courses;
};
 

export const getCourseByIdService = async (id: number) => {
  const course = await courseModel.getCourseById(id);
  return course;
};
 

export const updateCourseService = async (
  id: number,
  data: { title: string,
  description: string }
) => {
  await courseModel.updateCourse(id, data.title, data.description);
};
 

export const deleteCourseService = async (id: number) => {
  await courseModel.deleteCourse(id);
};