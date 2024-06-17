"use client";
import { SignedIn } from "@clerk/clerk-react";
import React from "react";
import SideNavbar from "./_components/SideNavbar";

const DashboardLayout = ({ children }) => {
  return (
    <SignedIn>
      <div className="md:w-64 fixed">
        <SideNavbar />
      </div>
      <div className="md:ml-64">{children}</div>
    </SignedIn>
  );
};

export default DashboardLayout;
