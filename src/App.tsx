import React, { useState } from 'react';
import TaskInput from './components/TaskInput';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (text: string) => {
    setTasks([...tasks, text]);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>ToDo App</h1>
      <TaskInput onAdd={handleAddTask} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
