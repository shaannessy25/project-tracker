import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);
  if (req.method === "POST") {
    const newProject = await db.project.create({
      data: {
        name: req.body.name,
        ownerId: user.id as string,
      },
    });
    res.json(newProject);
  }
    const projectId = req.query.id as string;
   if (req.method === "DELETE") {
     try {
       // Delete associated tasks
       await db.task.deleteMany({
         where: {
           projectId,
         },
       });

       // Delete the project
       await db.project.delete({
         where: {
           id: projectId,
         },
       });

       res.json({ message: "Project deleted successfully" });
     } catch (error) {
       console.error("Error deleting project:", error);
       res
         .status(500)
         .json({ error: "An error occurred while deleting the project" });
     }
   } else {
     res.status(405).json({ error: "Method not allowed" });
   }
}
