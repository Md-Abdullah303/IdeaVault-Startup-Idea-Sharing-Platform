import noDataFoundImg from "@/assest/noDataFound.avif";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const DataNotFoundPage = () => {
  return (
    <div className="flex flex-col items-center gap-3 justify-center w-full ">
      <div className="">
        <Image
          src={noDataFoundImg}
          alt="no data found img"
          width={4000}
          height={2000}
          className="w-120 rounded-xl "
        />
      </div>
      <p className="text-lg text-gray-400">
        Want to add{" "}
        <Link href={"/add-idea"} className="text-blue-400">
          Data?
        </Link>
      </p>
    </div>
  );
};

export default DataNotFoundPage;
