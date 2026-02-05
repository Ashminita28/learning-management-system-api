import {Response,NextFunction} from 'express';
import { AuthRequest } from './auth.middlewares';

export const requireRole=(
    roles:string[]
)=>{
    return(req:AuthRequest,res:Response,next:NextFunction)=>{
         if(!roles.includes(req.user.role)){
        return res.status(403).json({
            message:"Forbidden insufficient permissions",
        });
    }

    next();

    }
   
};