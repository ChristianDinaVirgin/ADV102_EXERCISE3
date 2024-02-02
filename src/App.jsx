import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const handleEditTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} onEdit={handleEditTodo} onDelete={handleDeleteTodo} />
    </div>
  );
}

export default App;
