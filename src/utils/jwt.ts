import jwt from 'jsonwebtoken'

const JWT_SECRET="secret_key";
const ACCESS_TOKEN_EXPIRY="15m";

export const generateAccessToken=(payload:{
    userId:number;
    email:string;
})=>{
    return jwt.sign(payload,JWT_SECRET,{expiresIn:ACCESS_TOKEN_EXPIRY});
};

export const verifyToken=(token:string)=>{
    return jwt.verify(token,JWT_SECRET);
};