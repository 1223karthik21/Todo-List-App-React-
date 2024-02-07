import React, { useState } from 'react';
import './TodoList.css';

function TodoList({ tasks, setTasks }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskTitle, setEditedTaskTitle] = useState('');

  const toggleTaskStatus = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleEditTask = (id, title) => {
    setEditingTaskId(id);
    setEditedTaskTitle(title);
  };

  const handleSaveTask = () => {
    const updatedTasks = tasks.map(task => {
      if (task.id === editingTaskId) {
        return { ...task, title: editedTaskTitle };
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditingTaskId(null);
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {editingTaskId === task.id ? (
            <div>
              <input
                type="text"
                value={editedTaskTitle}
                onChange={(e) => setEditedTaskTitle(e.target.value)}
              />
              <button onClick={handleSaveTask}>Save</button>
            </div>
          ) : (
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskStatus(task.id)}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
              </span>
              <div style={{ display: 'inline-block', marginLeft: '10px' }}>
                <button onClick={() => handleEditTask(task.id, task.title)}>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
