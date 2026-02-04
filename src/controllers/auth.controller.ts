import { Request,Response } from "express";

import * as authService from '../services/auth.services';

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