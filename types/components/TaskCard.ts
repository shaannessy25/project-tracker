import { Task as Tasktype } from "@prisma/client";

export interface Task extends Tasktype {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
  name: string;
  description: string;
  due: Date;
  tasks: Tasktype[];
}

export interface TaskCardProps{
  title?: string;
  tasks?: Tasktype[] | undefined;
  projectId?: string;
}
