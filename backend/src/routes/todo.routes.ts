// src/routes/todo.routes.ts
import { Router } from 'express';
import { TodoController } from '../controllers/todoController';

const router = Router();
const todoController = new TodoController();

// Ligando as URLs aos métodos do Controller
router.get('/todos', todoController.index);
router.post('/todos', todoController.create);
router.put('/todos/:id', todoController.update);
router.delete('/todos/:id', todoController.delete);

export { router };