import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask }) => {
  return (
    <ul className="bg-white rounded shadow p-4 mt-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
      ))}
    </ul>
  );
};

export default TaskList;
