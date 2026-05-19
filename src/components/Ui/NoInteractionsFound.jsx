"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { MdOutlineForum } from "react-icons/md";

const NoInteractionsFound = () => {
  return (
    <div className="w-full flex items-center justify-center px-4 py-14">
      <div className="max-w-2xl w-full rounded-3xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-white to-slate-100 dark:from-[#1f2937] dark:to-[#111827] shadow-xl p-8 md:p-12 text-center overflow-hidden relative">
        {/* glow effect */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-400/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-violet-500/20 blur-3xl rounded-full"></div>

        {/* icon */}
        <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-4xl shadow-lg">
          <MdOutlineForum />
        </div>

        {/* heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
          No Interactions Yet
        </h1>

        {/* description */}
        <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-7 max-w-lg mx-auto">
          Your{" "}
          <span className="font-semibold text-cyan-600 dark:text-cyan-400">
            IdeaVault
          </span>{" "}
          journey has just started. Explore creative ideas, leave comments, and
          connect with innovative minds to build meaningful interactions.
        </p>

        {/* buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/ideas">
            <Button className="rounded-xl px-8 py-6 text-base font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:scale-105 duration-300">
              Explore Ideas
            </Button>
          </Link>

          <Link href="/add-idea">
            {/* Added extra secondary button */}
            <Button
              variant="bordered"
              className="rounded-xl px-8 py-6 text-base font-semibold border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 duration-300"
            >
              Share Your Idea
            </Button>
          </Link>
        </div>

        {/* small footer text */}
        <p className="mt-8 text-xs tracking-wide text-slate-400 dark:text-slate-500">
          Start interacting and make your ideas shine ✨
        </p>
      </div>
    </div>
  );
};

export default NoInteractionsFound;
