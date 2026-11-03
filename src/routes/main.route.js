import { Router } from 'express';
import mainController from '../controllers/main.controller';

const mainRouter = Router();

mainRouter.get('/', (req, res) => {
    res.json('Hello World!');
});

mainRouter.get('/resource', mainController.getAll);
