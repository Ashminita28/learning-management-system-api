import { Request, Response } from "express";
import * as userService from "../services/user.service";
 

export const createUser = async (req: Request, res: Response) => {
  try {
    const userId = await userService.createUserService(req.body);
    res.status(201).json({
      message: "User created successfully",
      userId,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
 

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsersService();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
 

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserByIdService(
      Number(req.params.id)
    );
 
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
 
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
 

export const updateUser = async (req: Request, res: Response) => {
  try {
    await userService.updateUserService(
      Number(req.params.id),
      req.body
    );
 
    res.status(200).json({
      message: "User updated successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
 

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await userService.deleteUserService(Number(req.params.id));
 
    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
}