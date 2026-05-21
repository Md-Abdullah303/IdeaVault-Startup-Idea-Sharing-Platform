import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { IoMdHome } from "react-icons/io";

const NotFoundPage = () => {
  return (
    <div className="h-[60vh] flex items-center justify-center">
      <div className=" py-8 flex flex-col items-center gap-4">
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold">404</h1>
        <p className="text-gray-500 text-lg md:text-3xl">Page not found</p>
        <Link href={"/"}>
          <Button variant="danger-soft" className={"rounded-lg"}>
            <IoMdHome /> Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
