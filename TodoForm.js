import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ tasks, setTasks }) {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const addTask = () => {
    if (newTaskTitle.trim() !== '') {
      const newTask = {
        id: Date.now(),
        title: newTaskTitle,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
    }
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="Add new task"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TodoForm;
