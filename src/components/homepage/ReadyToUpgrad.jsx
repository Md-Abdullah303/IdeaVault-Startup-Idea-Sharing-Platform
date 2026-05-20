import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const ReadyToUpgrad = () => {
  return (
    <div className="rounded-3xl px-6 md:px-12 mb-15 py-16 md:py-24 bg-[#0b1220] border border-white/10 shadow-xl">
      <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
        {/* small badge */}
        <span className="text-xs md:text-sm px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
          IdeaVault Premium Experience
        </span>

        {/* heading */}
        <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
          Turn your ideas into something meaningful
        </h1>

        {/* description */}
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          Organize your creativity, collaborate with your team, and bring your
          best ideas to life with a simple and powerful workspace.
        </p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Button className="rounded-xl px-6 py-3 bg-white text-black font-medium hover:bg-gray-200 transition">
            Get Started
          </Button>

          <Button
            variant="outline"
            className="rounded-xl px-6 py-3 border border-white/20 text-white hover:bg-white/10 transition"
          >
            Back to Free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReadyToUpgrad;
