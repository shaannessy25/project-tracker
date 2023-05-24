import Card from "./Card";
import Image from "next/image";
import SidebarLink from "./SidebarLink";
import { links } from "@/constants/content";


const Sidebar = () => {
  return (
    <Card className='h-full w-40 flex items-center justify-between flex-wrap'>
      <div className='w-full flex justify-center items-center'>
      </div>
      {links.map((link, idx) => (
        <SidebarLink
          link={{
            link: link.link,
            icon: link.icon as "Settings" | "User" | "Grid" | "Calendar",
          }}
          key={idx}
        />
      ))}
    </Card>
  );
};

export default Sidebar;
