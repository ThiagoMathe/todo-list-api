// src/services/TodoService.ts
import { prisma } from '../database/client';

// Aqui ficam APENAS as regras de negócio e chamadas ao banco
export class TodoService {
  
  async list() {
    return await prisma.todo.findMany();
  }

  async create(title: string) {
    return await prisma.todo.create({
      data: { title }
    });
  }

  async update(id: number, title?: string, completed?: boolean) {
    // Verifica se existe antes de tentar atualizar
    const todoExists = await prisma.todo.findUnique({ where: { id } });
    
    if (!todoExists) {
      throw new Error("Todo not found");
    }

    return await prisma.todo.update({
      where: { id },
      data: { title, completed }
    });
  }

  async delete(id: number) {
    const todoExists = await prisma.todo.findUnique({ where: { id } });

    if (!todoExists) {
      throw new Error("Todo not found");
    }

    return await prisma.todo.delete({
      where: { id }
    });
  }
}