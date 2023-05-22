import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { TASK_STATUS } from "@prisma/client";
import { cookies } from "next/headers";
import Button from "./Button";
import Card from "./Card";
import NewTask from "./NewTask";

interface Task {
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

interface TaskCardProps {
  title?: string;
  tasks?: Task[];
}

const getData = async () => {
  const user = await getUserFromCookie(cookies());
  const tasks = await db.task.findMany({
    where: {
      ownerId: user?.id,
      NOT: {
        status: TASK_STATUS.COMPLETED,
        deleted: false,
      },
    },
    take: 5,
    orderBy: {
      due: "asc",
    },
  });

  return tasks;
};

const TaskCard = async ({ title, tasks, projectId }) => {
  const data = tasks || (await getData());
  return (
    <Card className='p-4'>
      <div className='flex flex-col h-full justify-between'>
        <div>
          <div className='mb-4'>
            <span className='text-3xl text-gray-600'>{title}</span>
          </div>
          <div>
            {data && data.length ? (
              <div>
                {data.map((task) => (
                  <div className='py-2' key={task.id}>
                    <div>
                      <span className='text-gray-800 text-xl'>{task.name}</span>
                    </div>
                    <div>
                      <span className='text-gray-400 text-lg'>
                        {task.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>No tasks</div>
            )}
          </div>
        </div>
        <div className='self-end mt-4'>
          <NewTask projectId={projectId} />
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
