import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { TASK_STATUS } from "@prisma/client";
import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import Button from "./Button";
import Card from "./Card";
import NewTask from "./NewTask";
import { Task, TaskCardProps } from "@/types/components/TaskCard";


const TaskCard: React.FC<TaskCardProps> = ({
  title,
  tasks,
  projectId,
}: TaskCardProps) => {

  return (
    <Card className='p-4'>
      <div className='flex flex-col h-full justify-between'>
        <div>
          <div className='mb-4'>
            <span className='text-3xl text-gray-600'>{title}</span>
          </div>
          <div>
            {tasks?.map((task) => (
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
        </div>
        <div className='self-end mt-4'>
          <NewTask projectId={projectId as string} />
        </div>
      </div>
    </Card>
  );
};

export async function getServerSideProps() {
  const user = await getUserFromCookie(cookies());
  const fetchedTasks = await db.task.findMany({
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

  return {
    props: {
      tasks: fetchedTasks,
    },
  };
}

export default TaskCard;
