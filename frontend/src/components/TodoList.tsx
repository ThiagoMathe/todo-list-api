import { TodoItem } from './TodoItem';
import type { Todo } from '../types/todo';
import { ListTodo } from 'lucide-react';

interface TodoListProps {
  todos: Todo[];
  onUpdate: (id: number, data: { title?: string; completed?: boolean }) => void;
  onDelete: (id: number) => void;
}

export const TodoList = ({ todos, onUpdate, onDelete }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <ListTodo size={48} className="mx-auto text-gray-300 mb-4" />
        <p className="text-gray-500 text-lg">No todos yet</p>
        <p className="text-gray-400 text-sm mt-2">Add your first task to get started!</p>
      </div>
    );
  }

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="space-y-6">
      {activeTodos.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
            Active ({activeTodos.length})
          </h2>
          <ul className="space-y-2">
            {activeTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            ))}
          </ul>
        </div>
      )}

      {completedTodos.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
            Completed ({completedTodos.length})
          </h2>
          <ul className="space-y-2">
            {completedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
