"use client";
import { Button } from "@heroui/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { LuArrowBigLeft } from "react-icons/lu";

const AddIdeaH1 = () => {
  const fullRef = useRef();
  useEffect(() => {
    const animation = () => {
      gsap.from(fullRef.current, {
        y: -25,
        opacity: 0,
        duration: 0.6,
      });
      gsap.to(fullRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
      });
    };
    animation();
  }, []);
  return (
    <div ref={fullRef} className="space-y-2">
      <h1 className="text-xl md:text-3xl font-bold">
        Submit your Startup Ideas
      </h1>
      <Link href={"/ideas"}>
        <Button className={"rounded-xs"} variant="outline">
          <LuArrowBigLeft />
          Show All Ideas
        </Button>
      </Link>
    </div>
  );
};

export default AddIdeaH1;
