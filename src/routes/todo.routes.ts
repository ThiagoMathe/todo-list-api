// src/routes/todo.routes.ts
import { Router } from 'express';
import { TodoController } from '../controllers/todoController';

const router = Router();
const todoController = new TodoController();

// Ligando as URLs aos métodos do Controller
router.get('/todo', todoController.index);
router.post('/todo', todoController.create);
router.put('/todo/:id', todoController.update);
router.delete('/todo/:id', todoController.delete);

export { router };