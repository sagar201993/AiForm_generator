import React from "react";
import { LibraryBig, LineChart, MessageSquare, Shield } from "lucide-react";

const SideNavbar = () => {
  const menuList = [
    {
      id: 1,
      name: "My Forms",
      icon: LibraryBig,
      path: "/",
    },
    {
      id: 2,
      name: "Responses",
      icon: MessageSquare,
      path: "/",
    },
    {
      id: 1,
      name: "Analytics",
      icon: LineChart,
      path: "/",
    },
    {
      id: 1,
      name: "Upgrade",
      icon: Shield,
      path: "/",
    },
  ];
  return (
    <div className="h-screen shadow-md">
      <div className="p-5">
        {menuList.map((menu, index) => (
          <h2
            key={index}
            className="flex items-end cursor-pointer gap-3 p-4 hover:bg-primary hover:text-white rounded-lg"
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default SideNavbar;
