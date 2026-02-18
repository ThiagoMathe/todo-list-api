import { useState, useEffect, useCallback } from 'react';
import type { Todo, CreateTodoDto, UpdateTodoDto } from '../types/todo';
import { todoService } from '../services/todo.service';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTodos = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await todoService.getAllTodos();
      setTodos(data);
    } catch (err) {
      setError('Failed to fetch todos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const createTodo = async (data: CreateTodoDto) => {
    try {
      setError(null);
      // 1. Cria tarefa temporária na tela
      const optimisticTodo: Todo = {
        id: Date.now(),
        title: data.title,
        completed: false,
      };
      setTodos((prev) => [optimisticTodo, ...prev]);

      // 2. Chama API
      const newTodo = await todoService.createTodo(data);

      // 3. Substitui a tarefa temporária pela real (com ID do banco)
      setTodos((prev) => prev.map((t) => (t.id === optimisticTodo.id ? newTodo : t)));
    } catch (err) {
      setError('Failed to create todo');
      console.error(err);
      fetchTodos(); // Reverte em caso de erro
    }
  };

  const updateTodo = async (id: number, data: UpdateTodoDto) => {
    try {
      setError(null);
      setTodos((prev) =>
        prev.map((todo) => (todo.id === id ? { ...todo, ...data } : todo))
      );

      const updatedTodo = await todoService.updateTodo(id, data);
      
      // Confirma os dados reais do banco
      setTodos((prev) => prev.map((t) => (t.id === id ? updatedTodo : t)));
    } catch (err) {
      setError('Failed to update todo');
      console.error(err);
      fetchTodos();
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      setError(null);
      // Remoção otimista
      setTodos((prev) => prev.filter((todo) => todo.id !== id));

      await todoService.deleteTodo(id);
    } catch (err) {
      setError('Failed to delete todo');
      console.error(err);
      fetchTodos();
    }
  };

  return {
    todos,
    loading,
    error,
    createTodo,
    updateTodo,
    deleteTodo,
    refetch: fetchTodos,
  };
};