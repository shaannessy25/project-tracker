import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";
import Greeting from "@/components/Greeting";
import GreetingsSkeleton from "@/components/GreetingsSkeleton";
import ProjectCard from "@/components/ProjectCard";
import TaskCard from "@/components/TaskCard";
import NewProject from "@/components/NewProject";

const getData = async () => {
  const user = await getUserFromCookie(cookies());
  const projects = await db.project.findMany({
    where: { ownerId: user?.id },
    include: { tasks: true },
  });
  return { projects, user };
};

export default async function Page() {
  const { projects } = await getData();
  const { user } = await getData();
  return (
    <div className="h-full overflow-y-auto pr-6 w-full">
      <div className="h-full items-stretch sm:items-center min-h-[content]">
        <div className="flex-1 flex-grow m-3">
          <Suspense fallback={<GreetingsSkeleton />}>
            <Greeting user={user} />
          </Suspense>
        </div>
        <div className="flex flex-wrap mt-3 m-3">
          {projects.map((project) => (
            <div className="w-full sm:w-1/2 lg:w-1/3 p-3" key={project.id}>
              <Link href={`/project/${project.id}`}>
                <ProjectCard project={project} />
              </Link>
            </div>
          ))}
          <div className="lg:w-1/3 p-3 sm:w-full">
            <NewProject />
          </div>
        </div>
      </div>
    </div>
  );
}
