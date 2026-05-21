"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { FcIdea } from "react-icons/fc";

const IdeasH1 = () => {
  const textRef = useRef();
  useEffect(() => {
    const animation = () => {
      gsap.from(textRef.current, {
        y: -25,
        opacity: 0,
        duration: 0.6,
      });
      gsap.to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
      });
    };
    animation();
  }, []);
  return (
    <h1
      ref={textRef}
      className="flex items-center gap-1 text-2xl sm:text-3xl md:text-5xl font-bold "
    >
      <FcIdea /> All Ideas
    </h1>
  );
};

export default IdeasH1;
