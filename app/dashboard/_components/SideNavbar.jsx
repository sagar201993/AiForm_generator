"use client";
import React, { useEffect } from "react";
import { LibraryBig, LineChart, MessageSquare, Shield } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const SideNavbar = () => {
  const menuList = [
    {
      id: 1,
      name: "My Forms",
      icon: LibraryBig,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Responses",
      icon: MessageSquare,
      path: "/dasboard/responses",
    },
    {
      id: 1,
      name: "Analytics",
      icon: LineChart,
      path: "/dasboard/analytics",
    },
    {
      id: 1,
      name: "Upgrade",
      icon: Shield,
      path: "/dasboard/upgrade",
    },
  ];
  const path = usePathname();
  useEffect(() => {}, [path]);
  return (
    <div className="h-screen shadow-md">
      <div className="p-5">
        {menuList.map((menu, index) => (
          <h2
            key={index}
            className={`flex items-end cursor-pointer gap-3 p-4 hover:bg-primary hover:text-white rounded-lg mb-3
             text-gray-500 ${path == menu.path && "bg-primary text-white"}`}
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
      <div className="fixed bottom-20 p-6 w-64">
        <Button className="w-full">+ CreateForm</Button>
        <div className="my-5">
          <Progress value={33} />
          <h2 className="text-sm mt-2 text-gray-600">
            <strong>2 out of 3 file created</strong>
          </h2>
          <h2 className="text-sm mt-2 text-gray-600">
            <h2 className="text-sm mt-2 text-gray-600">
              <strong>upgrade your plan</strong>
            </h2>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
