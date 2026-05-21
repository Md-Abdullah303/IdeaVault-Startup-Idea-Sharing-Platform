"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const MyIdeash1 = () => {
  const fullRef = useRef();
  useEffect(() => {
    const animation = () => {
      gsap.from(fullRef.current, {
        y: -15,
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
    <div ref={fullRef} className=" text-center space-y-3 px-3">
      <h1 className="text-3xl md:text-5xl font-bold font-banner">My Ideas</h1>
      <p className="text-gray-400 text-lg md:text-xl">
        Manage, explore, and track all the innovative ideas you have shared on
        IdeaVault.
      </p>
    </div>
  );
};

export default MyIdeash1;
