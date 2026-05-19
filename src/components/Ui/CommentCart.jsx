import { username } from "better-auth/plugins";
import Image from "next/image";
import React from "react";

const CommentCart = ({ comment }) => {
  const { commentPosted, userComment, userName, userImage } = comment;
  //   console.log(comment?.userImage);
  //   console.log(comment);
  return (
    <div className="flex items-start gap-3">
      <div className="">
        <Image
          src={userImage}
          alt="user img"
          width={500}
          height={400}
          className="w-10 h-10 rounded-full object-center object-cover"
        />
      </div>
      <div className="">
        <div className="flex items-center gap-1.5">
          <h1 className="text-xl font-bold">{userName}</h1>
          <p className=" text-gray-600">
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
        <p className="text-lg text-gray-400">{userComment}</p>
      </div>
    </div>
  );
};

export default CommentCart;
