import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);

  if (req.method === "POST") {
    const newTask = await db.task.create({
      data: {
        name: req.body.name,
        description: req.body.description,
        project: {
            connect: {
                id: req.body.projectId
            }
        },
        owner: {
            connect: {
                id: user.id as string
            }
        },
      },
    });
    res.json(newTask);
  }
}
