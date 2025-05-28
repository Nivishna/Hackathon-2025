import React, { useState } from 'react';

function TaskForm({ setTasks }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      setTasks(prev => [...prev, { title, status: 'Open' }]);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="border p-2 flex-1"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
}

export default TaskForm;
