import { z } from 'zod';

export const createTodoSchema = z.object({
  title: z
    .string({ message: "O título deve ser um texto" })
    .min(3, "O título deve ter pelo menos 3 caracteres"),
});

export const updateTodoSchema = z.object({
  title: z.string().min(3).optional(),
  completed: z.boolean().optional(),
});