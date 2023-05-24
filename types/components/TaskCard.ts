export interface Task {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
  name: string;
  description: string;
  due: Date;
  tasks: Task[];
  ownerId: string;
}

export interface TaskCardProps {
  title?: string;
  tasks?: Task[];
  projectId?: string;
}
