import React from 'react';
import type { TaskFilter as TaskFilterType } from '../types';

interface Props {
  filter: TaskFilterType;
  setFilter: (filter: TaskFilterType) => void;
}

const TaskFilter: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter('all')} disabled={filter === 'all'}>
        All
      </button>
      <button onClick={() => setFilter('active')} disabled={filter === 'active'}>
        Active
      </button>
      <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>
        Completed
      </button>
    </div>
  );
};

export default TaskFilter;
