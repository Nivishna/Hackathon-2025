import React from 'react';

function TaskList({ tasks, setTasks }) {
  const toggleStatus = (index) => {
    const updated = tasks.map((task, i) =>
      i === index ? { ...task, status: task.status === 'Open' ? 'Complete' : 'Open' } : task
    );
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index} className="border p-2 flex justify-between items-center mb-2">
          <span className={task.status === 'Complete' ? 'line-through' : ''}>{task.title}</span>
          <div className="flex gap-2">
            <button
              onClick={() => toggleStatus(index)}
              className="text-sm bg-green-500 text-white px-2 py-1 rounded"
            >
              {task.status === 'Open' ? 'Complete' : 'Reopen'}
            </button>
            <button
              onClick={() => deleteTask(index)}
              className="text-sm bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
