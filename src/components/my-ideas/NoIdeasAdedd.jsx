import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";

const NoIdeasAdedd = () => {
  return (
    <div className="mt-10 flex min-h-[60vh] items-center justify-center px-4">
      <div className="w-full max-w-2xl rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-xl transition-all dark:border-[#2f3542] dark:bg-[#1e2430]">
        {/* icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/20">
          <HiOutlineLightBulb className="text-4xl text-blue-600 dark:text-blue-400" />
        </div>

        {/* title */}
        <h1 className="mt-6 text-2xl font-bold text-gray-800 md:text-4xl dark:text-white">
          No Ideas Added Yet
        </h1>

        {/* description */}
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500 md:text-base dark:text-gray-400">
          Start building your creative collection on IdeaVault. Share your first
          innovative idea and inspire others with your imagination.
        </p>

        {/* button */}
        <Link href="/add-idea">
          <Button
            variant="solid"
            className="mt-8 rounded-xl bg-blue-600 px-8 py-6 text-base font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
          >
            Add Your First Idea
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NoIdeasAdedd;
