import * as enrollmentModel from '../models/enrollment.model'
 

export const createEnrollmentService = async (data: {
  userId: number,
  courseId: number,
}) => {
  const { userId,courseId} = data;
 
  const enrollmentId = await enrollmentModel.createEnrollment(userId,courseId);
 
  return enrollmentId;
};
 

export const getAllEnrollmentsService = async () => {
  const enrollments = await enrollmentModel.getAllEnrollments();
  return enrollments;
};
 

export const getEnrollmentByIdService = async (id: number) => {
  const enrollment = await enrollmentModel.getEnrollmentById(id);
  return enrollment;
};
 

export const updateEnrollmentService = async (
  id: number,
  data: { userId: number,
  courseId: number}
) => {
  await enrollmentModel.updateEnrollment(id, data.userId, data.courseId);
};
 

export const deleteEnrollmentService = async (id: number) => {
  await enrollmentModel.deleteEnrollment(id);
};