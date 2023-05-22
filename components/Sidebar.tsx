import Card from "./Card";
import Image from "next/image";
import SidebarLink from "./SidebarLink";
import { links } from "@/constants/content";
// import logo from "@/assets/images/logo.png";

const Sidebar = () => {
  return (
    <Card className='h-full w-40 flex items-center justify-between flex-wrap'>
      <div className='w-full flex justify-center items-center'>
        {/* <Image src={logo} alt='Able logo' priority className='w-14' /> */}
      </div>
      {links.map((link, idx) => (
        <SidebarLink link={link} key={idx} />
      ))}
    </Card>
  );
};

export default Sidebar;
