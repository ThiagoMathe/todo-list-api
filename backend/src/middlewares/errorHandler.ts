// src/middlewares/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export function errorHandler(
  error: any, 
  req: Request, 
  res: Response, 
  next: NextFunction
) {
  // 1. Se o erro for do Zod (Validação), retorna 400 bonitinho
  if (error instanceof ZodError) {
    return res.status(400).json({
      message: 'Erro de validação',
      errors: error.format()
    });
  }

  // 2. Se for um erro que nós mesmos geramos (ex: "Tarefa não encontrada")
  if (error instanceof Error) {
    return res.status(400).json({ message: error.message });
  }

  // 3. Se for algo que não conhecemos (Bug no código/banco), retorna 500
  console.error(error);
  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  });
}