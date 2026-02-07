import { Request, Response } from 'express';
import { TodoService } from '../services/todoService';
import { createTodoSchema, updateTodoSchema } from '../schemas/todo.schema';

export class TodoController {
  private todoService = new TodoService();

  constructor() {
    this.index = this.index.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async index(req: Request, res: Response) {
    const todos = await this.todoService.list();
    return res.json(todos);
  }

  async create(req: Request, res: Response) {
    // .parse() vai lançar um erro automático se falhar, e o middleware pega!
    const { title } = createTodoSchema.parse(req.body); 

    const todo = await this.todoService.create(title);
    return res.status(201).json(todo);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, completed } = updateTodoSchema.parse(req.body);

    // Se der erro no service, o middleware resolve.
    const todo = await this.todoService.update(Number(id), title, completed);
    return res.json(todo);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this.todoService.delete(Number(id));
    return res.status(204).send();
  }
}