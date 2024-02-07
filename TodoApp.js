import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './TodoApp.css';

function TodoApp() {
  const [tasks, setTasks] = useState([]);

  // Function to sort tasks alphabetically
  const sortTasks = () => {
    const sortedTasks = [...tasks].sort((a, b) => a.text.localeCompare(b.text));
    setTasks(sortedTasks);
  };

  // Function to filter completed tasks
  const filterCompletedTasks = () => {
    const activeTasks = tasks.filter(task => !task.completed);
    setTasks(activeTasks);
  };

  return (
    <div className="todo-app">
      <h1>Todo List - App</h1>
      {/* Button to sort tasks alphabetically */}
      <button onClick={sortTasks}>Sort Tasks</button>
      {/* Button to filter completed tasks */}
      <button onClick={filterCompletedTasks}>Filter Completed Tasks</button>
      <TodoForm tasks={tasks} setTasks={setTasks} />
      {/* Passing sorted tasks as a prop to TodoList component */}
      <TodoList tasks={[...tasks]} setTasks={setTasks} />
    </div>
  );
}

export default TodoApp;
