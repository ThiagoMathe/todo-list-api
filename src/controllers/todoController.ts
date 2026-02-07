// src/controllers/TodoController.ts
import { Request, Response } from 'express';
import { prisma } from '../database/client';

export class TodoController {
  
  // Listar tudo
  async index(req: Request, res: Response) {
    const todos = await prisma.todo.findMany();
    return res.json(todos);
  }

  // Criar
  async create(req: Request, res: Response) {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'O título é obrigatório!' });
    }

    const task = await prisma.todo.create({
      data: { title }
    });

    return res.status(201).json(task);
  }

  // Atualizar
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { title, completed } = req.body;

    try {
      const task = await prisma.todo.update({
        where: { id: Number(id) },
        data: { title, completed }
      });
      return res.json(task);
    } catch (error) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
  }

  // Deletar
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await prisma.todo.delete({ where: { id: Number(id) } });
      return res.status(204).send();
    } catch (error) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
  }
}