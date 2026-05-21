"use client";
import {
  EllipsisVertical,
  Pencil,
  SquarePlus,
  TrashBin,
} from "@gravity-ui/icons";
import {
  Button,
  Description,
  Dropdown,
  Header,
  Kbd,
  Separator,
} from "@heroui/react";
import { username } from "better-auth/plugins";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Label } from "recharts";
import { CommentEditModal } from "../Modal/CommentEditModal";
import { authClient } from "@/lib/auth-client";
import { CommentDeleteModal } from "../Modal/CommentDeleteModal";

const CommentCart = ({ comment }) => {
  const {
    data: session,
    isPending, //loading state
  } = authClient.useSession();
  const userData = session?.user;
  const { commentPosted, userComment, userName, userImage } = comment;

  // console.log("comment userId:", comment?.userId);
  // console.log("session userId:", userData?.id);
  // console.log("equal:", String(comment?.userId) === String(userData?.id));
  return (
    <div className="flex flex-col  py-3 px-5 rounded-lg items-start gap-3">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4 w-full">
        <div className=" flex items-center gap-3">
          <Image
            src={userImage}
            alt="user img"
            width={500}
            height={400}
            className="w-10  h-10 rounded-full object-center object-cover"
          />
          <div className="">
            <h1 className="sm:text-xl text-xs font-bold">{userName}</h1>
            <p className="text-xs sm:text-md text-gray-600">
              <span>
                {new Date(commentPosted).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span> , </span>
              <span>
                {new Date(commentPosted).toLocaleTimeString("en-US", {
                  minute: "numeric",
                  hour: "numeric",
                })}
              </span>
            </p>
          </div>
        </div>

        {String(comment?.userId) == String(userData?.id) && (
          <div className="flex  items-center gap-1.5 md:gap-3">
            <CommentEditModal comment={comment} />
            <CommentDeleteModal comment={comment} />
          </div>
        )}
      </div>
      <div className="flex px-3 md:px-5 flex-col items-start gap-1.5">
        <p className="text-lg text-gray-400">{userComment}</p>
      </div>
    </div>
  );
};

export default CommentCart;
