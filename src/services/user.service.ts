import * as userModel from "../models/user.model";
import bcrypt from 'bcrypt';

const salt_rounds=10
 

export const createUserService = async (data: {
  name: string;
  email: string;
  password: string;
  roles?:"STUDENT"|"EDUCATOR"|"ADMIN";
}) => {
  const { name, email, password,roles } = data;
  const hashedPassword=await bcrypt.hash(password,salt_rounds);
 if(!data.email.includes("@")){
    throw new Error("Invalid email format");
 }
  const role=data.roles  && ["STUDENT","EDUCATOR","ADMIN"].includes(data.roles)?data.roles:"STUDENT";
  
  const userId = await userModel.createUser(data.name, data.email, hashedPassword,role);
 
  return userId;
};
 

export const getAllUsersService = async () => {
  const users = await userModel.getAllUsers();
  return users;
};
 

export const getUserByIdService = async (id: number) => {
  const user = await userModel.getUserById(id);
  return user;
};
 

export const updateUserService = async (
  id: number,
  data: { name: string; email: string }
) => {
  await userModel.updateUser(id, data.name, data.email);
};
 

export const deleteUserService = async (id: number) => {
  await userModel.deleteUser(id);
};