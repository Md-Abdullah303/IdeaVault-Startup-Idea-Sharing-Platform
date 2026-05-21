import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <Card className="dark-card h-full rounded-xl border p-4 shadow-sm transition-all hover:shadow-md">
      <div className="flex h-full flex-col">
        {/* Post Owner */}
        <div>
          <small className="text-gray-400">Posted comment on</small>

          <div className="mt-2 flex items-center gap-3">
            <Image
              src={postsUserImage}
              alt={postsUserName}
              width={50}
              height={50}
              className="h-12 w-12 rounded-full object-cover"
            />

            <div className="min-w-0">
              <h2 className="line-clamp-1 font-semibold">{postsUserName}</h2>

              <p className="line-clamp-1 text-sm text-gray-400">
                {postsUserEmail}
              </p>
            </div>
          </div>
        </div>

        <hr className="my-4 border-default-200" />

        {/* Idea Info */}
        <div className="space-y-3">
          <Chip size="sm" color="accent">
            {postTag}
          </Chip>

          <h1 className="break-words text-xl font-bold md:text-2xl">
            {postTitle}
          </h1>

          <p className="font-semibold text-green-500">
            {postEstimatedBudget[0] == "$"
              ? postEstimatedBudget
              : `$${postEstimatedBudget}`}
          </p>
        </div>

        <hr className="my-4 border-default-200" />

        {/* Comment Section (grow করবে) */}
        <div className="flex-1 space-y-2">
          <small className="text-gray-400">Your Comment</small>

          <p className="break-words line-clamp-3 text-base md:text-lg">
            {userComment}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto pt-4">
          <p className="mb-3 text-sm text-gray-400">
            <span className="font-medium">Time:</span>{" "}
            {new Date(commentPosted).toLocaleString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </p>

          <Link href={`/ideas/${postId}`} className="block w-full">
            <Button className="w-full rounded-lg">See Comment</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default InteractionsCart;
