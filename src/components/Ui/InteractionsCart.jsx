import { Avatar, Button, Card, Chip } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdSaveAs } from "react-icons/md";

const InteractionsCart = ({ comment }) => {
  const {
    postId,
    postTag,
    postEstimatedBudget,
    postTitle,
    commentPosted,
    userComment,
    postsUserName,
    postsUserImage,
    postsUserEmail,
  } = comment;
  //   console.log(comment);

  return (
    <Card className="rounded-lg border  bg-white dark:dark:bg-[#323b49] grid grid-cols-12  gap-5 items-start sm:items-center">
      <div className="text-2xl text-gray-500 col-span-2 sm:col-span-1">
        <MdSaveAs />
      </div>
      {/* comment */}
      <div className="col-span-5 sm:col-span-4 flex flex-col items-center gap-1">
        <p className="text-center text-[16px] line-clamp-3">{userComment}</p>
        <Chip color="accent">
          {new Date(commentPosted).toLocaleDateString("en-Us", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </Chip>
      </div>
      {/* post info */}
      <div className="col-span-5 sm:col-span-3 flex flex-col items-center gap-1">
        <p className="text-green-400 text-lg">${postEstimatedBudget}</p>
        <p className="text-gray-400 text-center line-clamp-2">{postTitle}</p>
        <Chip color="success">{postTag}</Chip>
      </div>
      {/* posters info */}
      <div className="col-span-5 sm:col-span-2 overflow-hidden">
        <div className="flex items-center gap-2">
          <Avatar size="sm">
            <Avatar.Image alt={postsUserName} src={postsUserImage} />
            <Avatar.Fallback delayMs={600}>
              {postsUserName.toUpperCase()[(0, 2)]}
            </Avatar.Fallback>
          </Avatar>
          <div className="flex flex-col gap-0">
            <p className="text-sm leading-5 font-medium">{postsUserName}</p>
            <p className="text-xs leading-none text-muted">{postsUserEmail}</p>
          </div>
        </div>
      </div>
      <div className="col-span-5 sm:col-span-2 ">
        <Link className="w-full flex justify-end" href={`/ideas/${postId}`}>
          <Button className={"rounded-lg"}>See comment</Button>
        </Link>
      </div>
    </Card>
  );
};

export default InteractionsCart;
