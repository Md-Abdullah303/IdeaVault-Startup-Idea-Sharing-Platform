"use client";
import { Avatar, Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { MyIdeasEditModal } from "../Modal/MyIdeasEditModal";
import { DeleteIdeas } from "../Modal/MyIdeasDeleteModal";
import gsap from "gsap";

const UserIdeasCard = ({ ideas }) => {
  const fullRef = useRef();
  useEffect(() => {
    const animation = () => {
      gsap.from(fullRef.current, {
        y: 15,
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
  const {
    userName,
    userImage,
    postedDate,
    detailedDescription,
    proposedSolution,
    problemStatement,
    image,
    category,
    targetAudience,
    estimatedBudget,
    tag,
    shortDescription,
    title,
  } = ideas;
  //   console.log(ideas);
  return (
    <Card
      ref={fullRef}
      className="rounded-xs hover:-translate-y-1.5 hover:shadow-xl duration-300 border p-3  grid grid-cols-12 gap-5"
    >
      {/* Ideas info */}
      <div className="col-span-12 md:col-span-9 space-y-3">
        {/* posted user info */}
        <div className="flex items-center gap-2">
          <Avatar>
            <Avatar.Image alt={userName} src={userImage} />
            <Avatar.Fallback>{userName.toUpperCase()[0]}</Avatar.Fallback>
          </Avatar>
          <div className="">
            <h1 className="text-lg font-bold">{userName}</h1>
            <p className="text-gray-400">
              {new Date(postedDate).toLocaleDateString("en-DB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
              <span>
                ,{" "}
                {new Date(postedDate).toLocaleTimeString("en-db", {
                  minute: "numeric",
                  hour: "numeric",
                })}
              </span>
            </p>
          </div>
        </div>
        {/* ideas info */}
        <div className=" border-t pt-4 space-y-2 px-4 border-gray-300">
          <div className="flex flex-col md:flex-row items-start gap-3">
            <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
            <div className="flex flex-row items-start gap-2">
              <Chip color="accent">{category}</Chip>
              <Chip color="success">{tag}</Chip>
            </div>
          </div>
          <p className="text-gray-400">{shortDescription}</p>
          <p className="text-lg font-semibold">
            Out Budget :{" "}
            <span className="text-green-500 font-normal">
              ${estimatedBudget}
            </span>
          </p>
          <p className="text-lg font-semibold">
            <span>Problem :</span>{" "}
            <span className="text-gray-400 font-normal">
              {problemStatement}
            </span>
          </p>
          <p>
            <span className="text-lg font-semibold">Problem Solution :</span>{" "}
            <span className="text-gray-400 font-normal">
              {proposedSolution}
            </span>
          </p>
          <p>
            <span className="text-lg font-semibold">Description :</span>{" "}
            <span className="text-gray-400 font-normal">
              {detailedDescription}
            </span>
          </p>
        </div>
        {/* edit and delete btn */}
        <div className="flex items-center gap-2">
          <MyIdeasEditModal ideas={ideas} />
          <DeleteIdeas ideas={ideas} />
        </div>
      </div>
      {/* Ideas image */}
      <div className="col-span-12 md:col-span-3 h-65 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="h-65 w-full object-cover object-center rounded-lg shadow-sm"
        />
      </div>
    </Card>
  );
};

export default UserIdeasCard;
