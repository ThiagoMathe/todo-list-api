import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Plus } from 'lucide-react';

const todoSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title is too long'),
});

type TodoFormData = z.infer<typeof todoSchema>;

interface TodoFormProps {
  onSubmit: (data: TodoFormData) => void;
  disabled?: boolean;
}

export const TodoForm = ({ onSubmit, disabled }: TodoFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFormData>({
    resolver: zodResolver(todoSchema),
  });

  const handleFormSubmit = (data: TodoFormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="mb-6">
      <div className="flex gap-2">
        <div className="flex-1">
          <input
            {...register('title')}
            type="text"
            placeholder="What needs to be done?"
            disabled={disabled}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={disabled}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <Plus size={20} />
          Add
        </button>
      </div>
    </form>
  );
};
