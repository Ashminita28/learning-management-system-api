import bcrypt from 'bcrypt'
import * as userModel from '../models/user.model'
import { generateAccessToken } from '../utils/jwt';

export const loginService=async(data:{
  email:string;
  password:string;
})=>{
  const {email,password}=data;

  const user=await userModel.getUserByEmail(email);
  if(!user){
    throw new Error("Invalid email or password");
  }

  const isMatch=await bcrypt.compare(password,user.password);

  if(!isMatch){
    throw new Error("Invalid email or password");
  }

  const accessToken=generateAccessToken({
    userId:user.id,
    email:user.email,
  })

  return{
      accessToken,
    };
}