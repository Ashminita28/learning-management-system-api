import express from 'express';
import userRoutes from './routes/user.routes';
import './db/database';
import courseRoutes from './routes/course.routes';
import enrollmentRoutes from './routes/enrollment.routes';
import moduleRoutes from './routes/module.routes';
import lessonRoutes from './routes/lesson.routes';
import authRoutes from './routes/auth.routes';
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
import path from 'path';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'LMS API',
        version: '1.0.0',
        description: 'This is a REST API application made with Express.',
        license: {
            name: 'Licensed Under MIT',
            url: 'https://spdx.org/licenses/MIT.html',
        },
        contact: {
            name: 'JSONPlaceholder',
            url: 'https://jsonplaceholder.typicode.com',
        },
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Development server',
        },
    ],
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: [path.join(__dirname, 'routes', '*.ts')],
};

const swaggerSpec = swaggerJSDoc(options);

const app = express();
app.use(express.json());

app.use(authRoutes);
app.use(userRoutes);
app.use(courseRoutes);
app.use(moduleRoutes);
app.use(lessonRoutes);
app.use(enrollmentRoutes);

console.log(Object.keys(swaggerSpec.paths || {}));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
export default app;
