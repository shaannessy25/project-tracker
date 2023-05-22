"use client";
import { FC } from "react";
import { Prisma } from "@prisma/client";
import Card from "./Card";
import clsx from "clsx";
import { XCircle } from "react-feather";
import { deleteProject } from "@/lib/api";
import Button from "./Button";
const projectWithTasks = Prisma.validator<Prisma.ProjectArgs>()({
  include: { tasks: true },
});

type ProjectWithTasks = Prisma.ProjectGetPayload<typeof projectWithTasks>;

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const ProjectCard: FC<{ project: ProjectWithTasks }> = ({ project }) => {
  const completedCount = project.tasks.filter(
    (t) => t.status === "COMPLETED"
  ).length;
  const progress = Math.ceil((completedCount / project.tasks.length) * 100);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await deleteProject(project.id);
      console.log("Project deleted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Failed to delete project", error);
    }
  };

  return (
    <Card className='!px-6 !py-8 hover:scale-105 transition-all ease-in-out duration-200 relative'>
      <div>
        <div className='absolute top-2 right-2 cursor-pointer'>
          <Button intent='danger' size='small' onClick={handleDelete}>
            <XCircle color='red' />
          </Button>
        </div>
        <span className='text-sm text-gray-300'>
          {formatDate(project.createdAt)}
        </span>
      </div>
      <div className='mb-6'>
        <span className='text-3xl text-gray-600'>{project.name}</span>
      </div>
      <div className='mb-2'>
        <span className='text-gray-400'>
          {completedCount}/{project.tasks.length} completed
        </span>
      </div>
      <div>
        <div className='w-full h-2 bg-violet-200 rounded-full mb-2'>
          <div
            className={clsx(
              "h-full text-center text-xs text-white bg-violet-600 rounded-full"
            )}
            style={{ width: `${progress}%` }}></div>
        </div>
        <div className='text-right'>
          <span className='text-sm text-gray-600 font-semibold'>
            {progress}%
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
