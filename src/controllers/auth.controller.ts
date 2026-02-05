import { Request,Response } from "express";

import * as authService from '../services/auth.services';
import * as userService from '../services/user.service';

export const login=async(req:Request,res:Response)=>{
   try{
    const tokenData=await authService.loginService(req.body);
    res.status(200).json({
      message:"Login successfull!!",
      ...tokenData,
    });
   }catch(error:any){
    res.status(401).json({
      message: error.message,
    });
   }
};
export const register=async(req:Request,res:Response)=>{
   try{
    const userId=await userService.createUserService(req.body);
    res.status(200).json({
      message:"Registered successfully",
      userId,
    });
   }catch(error:any){
    res.status(401).json({
      message: error.message,
    });
   }
};
export const logout=async(req:Request,res:Response)=>{
   try{
    res.status(200).json({
      message:"Logged out successfully",
    });
   }catch(error:any){
    res.status(401).json({
      message: error.message,
    });
   }
};