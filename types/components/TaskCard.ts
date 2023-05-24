import { Task as TaskType } from "@prisma/client";

export interface Task extends TaskType {
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
  tasks?:
    | Task[]
    | import("/Users/Shaan/Desktop/Code/project-tracker/my-project/node_modules/.prisma/client/index").Task[];
  projectId?: string;
}
