import { NextFunction, Request,Response } from "express";
import jwt from 'jsonwebtoken';

const JWT_SECRET="secret_key";

export interface AuthRequest extends Request{
    user?:any
}

export const authenticate=( req:AuthRequest,res:Response,next:NextFunction)=>{
    const authHeader=req.headers.authorization;
    

    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(401).json({
            message:"Access token missing",
        });
    }

    const token=authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({message:"Token missing"})
    }
    try{
        const decoded=jwt.verify(token,JWT_SECRET);

        req.user=decoded;

        next();
    }catch(error){
        return res.status(401).json({
            message:"Invalid or expired token",
        });
    }
};
    