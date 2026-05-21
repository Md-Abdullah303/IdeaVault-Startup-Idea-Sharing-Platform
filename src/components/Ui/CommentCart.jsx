import { username } from "better-auth/plugins";
import Image from "next/image";
import React from "react";

const CommentCart = ({ comment }) => {
  const { commentPosted, userComment, userName, userImage } = comment;
  //   console.log(comment?.userImage);
  //   console.log(comment);
  return (
    <div className="flex flex-col hover:shadow-sm p-2 rounded-lg items-start gap-3">
      <div className=" flex items-center gap-3">
        <Image
          src={userImage}
          alt="user img"
          width={500}
          height={400}
          className="w-10 h-10 rounded-full object-center object-cover"
        />
        <h1 className="text-xl font-bold">{userName}</h1>
      </div>

      <div className="flex flex-col items-start gap-1.5">
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
        <p className="text-lg text-gray-400">{userComment}</p>
      </div>
    </div>
  );
};

export default CommentCart;
