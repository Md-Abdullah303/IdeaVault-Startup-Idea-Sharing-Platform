"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const MyIntractionsH1 = () => {
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
    <div ref={fullRef} className="font-ibm space-y-2">
      <h1 className="text-2xl md:text-4xl font-bold">My Interactions</h1>
      <p className="text-gray-500">Edit and Delete your interactions</p>
    </div>
  );
};

export default MyIntractionsH1;
