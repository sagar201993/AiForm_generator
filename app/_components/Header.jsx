import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 border shadow-sm">
      <div className="flex items-center justify-between">
        <Image src={"/logo.svg"} width={180} height={50} />
        <Button>Get started</Button>
      </div>
    </div>
  );
};

export default Header;
