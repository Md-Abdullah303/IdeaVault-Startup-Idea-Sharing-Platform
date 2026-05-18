import Image from "next/image";
import React from "react";
import notFoundImg from "@/assest/404.png";
import Link from "next/link";
import { Button } from "@heroui/react";
import { IoMdHome } from "react-icons/io";

const NotFoundPage = () => {
  return (
    <div className="h-[60vh] flex items-center justify-center">
      <div className=" py-8 flex flex-col items-center gap-4">
        <Image
          src={notFoundImg}
          alt="404 img"
          width={1000}
          height={800}
          className="w-100"
        />
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
