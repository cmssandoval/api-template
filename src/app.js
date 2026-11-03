import express from 'express';
import errorHandler from './middlewares/error.middleware';
import mainMiddlewareOrHandler from './middlewares/main.middleware';

const app = express();
app.use(express.json());
app.use(mainMiddlewareOrHandler);

app.use('/', mainRouter);

app.use(errorHandler);

export default app;
