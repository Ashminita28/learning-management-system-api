import { Router } from "express";

import { login,register,logout } from "../controllers/auth.controller";

const authRoutes=Router();
authRoutes.post("/auth/register",register);
authRoutes.post("/auth/login",login);
authRoutes.post("/auth/login",logout);
export default authRoutes;