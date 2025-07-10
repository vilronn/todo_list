import React from 'react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  toggleTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTask }) => {
  return (
    <li
      className={`flex items-center justify-between p-2 border-b ${
        task.completed ? 'text-gray-400 line-through' : ''
      }`}
    >
      <span onClick={() => toggleTask(task.id)} className="cursor-pointer">
        {task.text}
      </span>
    </li>
  );
};

export default TaskItem;
