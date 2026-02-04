import express from 'express';
import userRoutes from './routes/user.routes';
import './db/database';
import courseRoutes from './routes/course.routes';
import enrollmentRoutes from './routes/enrollment.routes';
import moduleRoutes from './routes/module.routes';
import lessonRoutes from './routes/lesson.routes';
import authRoutes from './routes/auth.routes';

const app=express();
app.use(express.json());


app.use(authRoutes);
app.use(userRoutes);
app.use(courseRoutes);
app.use(moduleRoutes);
app.use(lessonRoutes);
app.use(enrollmentRoutes);
export default app;