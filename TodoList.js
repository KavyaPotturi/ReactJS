import React, { useState } from 'react';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input.trim()]);
      setInput('');
    }
  };

  const removeTask = index => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="flex space-x-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 border px-2 py-1 rounded"
          placeholder="Enter task"
        />
        <button onClick={addTask} className="bg-blue-600 text-white px-4 py-1 rounded">
          Add
        </button>
      </div>
      <ul className="mt-4 list-disc list-inside">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center mt-2">
            {task}
            <button
              onClick={() => removeTask(index)}
              className="text-red-500 text-sm"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

