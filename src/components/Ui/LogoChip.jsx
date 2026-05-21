import React from "react";
import { Chip } from "@heroui/react";
import logo from "@/assest/logo.png";
import Image from "next/image";

const LogoChip = ({ children }) => {
  return (
    <div className="dark:hover:shadow-black/50 hover:shadow-2xl">
      <Chip className="py-1 px-5 rounded-full border border-gray-300 text-gray-600 bg-cyan-50 ">
        <Image src={logo} alt="logo" width={400} height={300} className="w-4" />
        <h1 className="text-lg">{children}</h1>
      </Chip>
    </div>
  );
};

export default LogoChip;
