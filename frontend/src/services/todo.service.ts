import api from './api';
import type { Todo, CreateTodoDto, UpdateTodoDto } from '../types/todo';

export const todoService = {
  async getAllTodos(): Promise<Todo[]> {
    const response = await api.get<Todo[]>('/todos'); // Plural!
    return response.data;
  },

  async createTodo(data: CreateTodoDto): Promise<Todo> {
    const response = await api.post<Todo>('/todos', data);
    return response.data;
  },

  async updateTodo(id: number, data: UpdateTodoDto): Promise<Todo> {
    const response = await api.put<Todo>(`/todos/${id}`, data);
    return response.data;
  },

  async deleteTodo(id: number): Promise<void> {
    await api.delete(`/todos/${id}`);
  },
};