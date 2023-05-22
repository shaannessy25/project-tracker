
interface RequestConfig {
  url: string;
  method: string;
  body?: any;
  json?: boolean;
}

interface User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  password: string;
  firstName?: string | null;
  lastName?: string | null;
  projects?: any;
  tasks?: any;
}


export const fetcher = async ({ url, method, body, json = true }: RequestConfig): Promise<any> => {
  const res = await fetch(url, {
    method,
    body: body && JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  if (json) {
    const data = await res.json();
    return data;
  }
};

export const register = async (user: any) => {
  return fetcher({
    url: "/api/register",
    method: "POST",
    body: user,
    json: false,
  });
};

export const signin = async (user: any) => {
  return fetcher({
    url: "/api/signin",
    method: "POST",
    body: user,
    json: false,
  });
};

export const createNewProject = async (name: string) => {
  const newProject = await fetcher({
    url: "/api/project",
    method: "POST",
    body: { name },
  });
  return newProject;
};


export const deleteProject = async (id: any) => {
  return fetcher({
    url: `/api/project/${id}`,
    method: "DELETE",
    json: false,
  });
}