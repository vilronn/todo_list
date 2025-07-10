export interface Task {
  id: number;
  text: string;
  completed: boolean;
}
export type TaskFilter = 'all' | 'completed' | 'active';

export interface TaskContextType {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  filter: TaskFilter;
  setFilter: (filter: TaskFilter) => void;
}