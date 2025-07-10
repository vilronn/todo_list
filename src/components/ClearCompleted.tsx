import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Task } from '../types';

const ClearCompleted: React.FC = () => {
  const { tasks, setFilter } = useTaskContext();
  const { deleteTask } = useTaskContext();

  const handleClear = () => {
    tasks.forEach((task: Task) => {
      if (task.completed) deleteTask(task.id);
    });
    setFilter('all');
  };

  return (
    <button onClick={handleClear} style={{ marginTop: '1rem' }}>
      Clear Completed
    </button>
  );
};

export default ClearCompleted;
