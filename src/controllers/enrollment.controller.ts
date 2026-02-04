import { Request, Response } from "express";
import * as enrollmentService from "../services/enrollment.service";
 

export const createEnrollment = async (req: Request, res: Response) => {
  try {
    const enrollmentId = await enrollmentService.createEnrollmentService(req.body);
    res.status(201).json({
      message: "enrollment created successfully",
      enrollmentId,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
 

export const getAllEnrollments = async (_req: Request, res: Response) => {
  try {
    const enrollments = await enrollmentService.getAllEnrollmentsService();
    res.status(200).json(enrollments);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
 

export const getEnrollmentById = async (req: Request, res: Response) => {
  try {
    const enrollment = await enrollmentService.getEnrollmentByIdService(
      Number(req.params.id)
    );
 
    if (!enrollment) {
      return res.status(404).json({ message: "enrollment not found" });
    }
 
    res.status(200).json(enrollment);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
 

export const updateEnrollment= async (req: Request, res: Response) => {
  try {
    await enrollmentService.updateEnrollmentService(
      Number(req.params.id),
      req.body
    );
 
    res.status(200).json({
      message: "Enrollment updated successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
 

export const deleteEnrollment= async (req: Request, res: Response) => {
  try {
    await enrollmentService.deleteEnrollmentService(Number(req.params.id));
 
    res.status(200).json({
      message: "Enrollment deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
}