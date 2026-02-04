import * as enrollmentModel from '../models/enrollment.model'
 

export const createEnrollmentService = async (data: {
  title: string,
  description: string,
}) => {
  const { title,description } = data;
 
  const enrollmentId = await enrollmentModel.createEnrollment(title,description);
 
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
  data: { title: string,
  description: string }
) => {
  await enrollmentModel.updateEnrollment(id, data.title, data.description);
};
 

export const deleteEnrollmentService = async (id: number) => {
  await enrollmentModel.deleteEnrollment(id);
};