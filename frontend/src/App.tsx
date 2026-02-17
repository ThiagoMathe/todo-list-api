import { useEffect, useState, FormEvent } from 'react';
import './App.css';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState(''); // Estado para o input

  // 1. Carregar tarefas ao abrir
  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  // 2. Função para CRIAR tarefa
  async function handleCreateTodo(event: FormEvent) {
    event.preventDefault(); // Não deixa a tela recarregar

    if (!newTodoTitle) return;

    const response = await fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTodoTitle })
    });

    const newTodo = await response.json();
    setTodos([...todos, newTodo]); // Adiciona na lista visualmente
    setNewTodoTitle(''); // Limpa o input
  }

  // 3. Função para COMPLETAR/DESCOMPLETAR
  async function handleToggleTodo(id: number, completed: boolean) {
    // Atualiza visualmente ANTES do backend (Otimista)
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !completed } : todo
    );
    setTodos(updatedTodos);

    await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !completed })
    });
  }

  // 4. Função para DELETAR
  async function handleDeleteTodo(id: number) {
    // Remove da tela na hora
    setTodos(todos.filter(todo => todo.id !== id));

    await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE'
    });
  }

  return (
    <div className="container">
      <h1>🚀 Minha Lista: </h1>

      {/* Formulário de Adicionar */}
      <form onSubmit={handleCreateTodo} className="add-todo-form">
        <input 
          type="text" 
          placeholder="O que precisa ser feito?" 
          value={newTodoTitle}
          onChange={e => setNewTodoTitle(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      {/* Lista de Tarefas */}
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <div className="todo-content" onClick={() => handleToggleTodo(todo.id, todo.completed)}>
              <span className="checkbox">{todo.completed ? '✅' : '⬜'}</span>
              <span>{todo.title}</span>
            </div>
            
            <button 
              className="delete-btn" 
              onClick={() => handleDeleteTodo(todo.id)}
              title="Deletar tarefa"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;