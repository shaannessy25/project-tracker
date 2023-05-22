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
  // Other method handlers (GET, DELETE, etc.) go here...
 if (req.method === "DELETE") {
   try {
     const projectId = req.body.id;

     await db.project.delete({
       where: {
         id: projectId,
       },
     });

     return res.status(200).json({ message: "Project deleted successfully" });
   } catch (error) {
     console.log("An error occurred while deleting the project: ", error, req.body);
     return res
       .status(500)
       .json({ error: "An error occurred while deleting the project" });
   }
 }
}
