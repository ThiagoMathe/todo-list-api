import { useState } from 'react';
import { Check, Trash2, Edit2, X } from 'lucide-react';
import type { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onUpdate: (id: number, data: { title?: string; completed?: boolean }) => void;
  onDelete: (id: number) => void;
}

export const TodoItem = ({ todo, onUpdate, onDelete }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleSave = () => {
    if (editedTitle.trim() && editedTitle !== todo.title) {
      onUpdate(todo.id, { title: editedTitle.trim() });
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(todo.title);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <li className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition group">
      <button
        onClick={() => onUpdate(todo.id, { completed: !todo.completed })}
        className={`flex-shrink-0 w-6 h-6 rounded border-2 transition flex items-center justify-center ${
          todo.completed
            ? 'bg-green-500 border-green-500'
            : 'border-gray-300 hover:border-green-500'
        }`}
      >
        {todo.completed && <Check size={16} className="text-white" />}
      </button>

      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
          autoFocus
          className="flex-1 px-2 py-1 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <span
          className={`flex-1 ${
            todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
          }`}
        >
          {todo.title}
        </span>
      )}

      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
        {isEditing ? (
          <button
            onClick={handleCancel}
            className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded transition"
            title="Cancel"
          >
            <X size={18} />
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded transition"
            title="Edit"
          >
            <Edit2 size={18} />
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded transition"
          title="Delete"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </li>
  );
};
