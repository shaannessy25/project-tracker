import TaskCard from "@/components/TaskCard";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { Task } from "@prisma/client";


interface ProjectPageProps {
  tasks: Task[];
}
const getData = async (id: string) => {
  const user = await getUserFromCookie(cookies());
  const project = await db.project.findFirst({
    where: { id, ownerId: user?.id },
    include: {
      tasks: true,
    },
  });

  return project;
};

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await getData(params.id);

  return (
    <div className='h-full overflow-y-auto pr-6 w-full mx-4 mt-4 '>
      <TaskCard
        tasks={project?.tasks as Task[]}
        title={project?.name}
        projectId={project?.id}
      />
    </div>
  );
}
