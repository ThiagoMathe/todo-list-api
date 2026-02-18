import { CheckSquare, AlertCircle, RefreshCw } from 'lucide-react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { useTodos } from './hooks/useTodos';

function App() {
  const { todos, loading, error, createTodo, updateTodo, deleteTodo, refetch } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <CheckSquare size={40} className="text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-800">Todo List</h1>
          </div>
          <p className="text-gray-600">Organize your tasks efficiently</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-red-800 font-medium">Error</p>
                <p className="text-red-600 text-sm">{error}</p>
              </div>
              <button
                onClick={refetch}
                className="text-red-600 hover:text-red-800 transition"
                title="Retry"
              >
                <RefreshCw size={18} />
              </button>
            </div>
          )}

          <TodoForm onSubmit={createTodo} disabled={loading} />

          {loading && todos.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-500">Loading todos...</p>
            </div>
          ) : (
            <>
              <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />

              {todos.length > 0 && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{todos.length} {todos.length === 1 ? 'task' : 'tasks'} total</span>
                    <span>
                      {todos.filter((t) => t.completed).length} completed
                    </span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>Thiago Matheus Honorato</p>
        </footer>
      </div>
    </div>
  );
}

export default App;