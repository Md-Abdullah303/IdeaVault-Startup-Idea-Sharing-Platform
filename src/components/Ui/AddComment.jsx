"use client";
import { authClient } from "@/lib/auth-client";
import { postComment } from "@/lib/getData/data";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import CommentCart from "./CommentCart";

const AddComment = ({ idea, comments }) => {
  const [comment, setComment] = useState();
  const router = useRouter();
  const {
    data: session,
    isPending, //loading state
  } = authClient.useSession();
  const userData = session?.user;

  const handleComment = async () => {
    if (!comment) {
      toast.error("Empty comment");
      return;
    }

    const newCommentData = {
      userId: userData?.id,
      userImage: userData?.image,
      userEmail: userData?.email,
      userName: userData?.name,
      userComment: comment,
      commentPosted: new Date(),
      postId: idea._id,
      postTitle: idea.title,
      postShortDescription: idea.shortDescription,
      postTag: idea.tag,
      postEstimatedBudget: idea.estimatedBudget,
      postTargetAudience: idea.targetAudience,
      postCategory: idea.category,
      postImage: idea.image,
      postProblemStatement: idea.problemStatement,
      postProposedSolution: idea.proposedSolution,
      postDetailedDescription: idea.detailedDescription,
      postsUserEmail: idea.userEmail,
      postsUserImage: idea.userImage,
      postsUserName: idea.userName,
    };

    const res = await postComment(newCommentData);
    if (res) {
      toast.success("comment successful..");
      setComment("");
      router.refresh();
    } else {
      toast.error(res);
    }
  };

  return (
    <div className="">
      {isPending ? (
        "Pending..."
      ) : userData ? (
        <div className="">
          {/* comment box */}
          <div className="mt-10 border rounded-lg flex flex-col items-end gap-2 p-3 border-gray-400">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              name="comment"
              id="comment"
              placeholder="Add comment.."
              className="outline-none  border-gray-400 w-full min-h-30 rounded-lg "
            ></textarea>
            <Button
              onClick={handleComment}
              value="outline"
              className={"rounded-xs "}
            >
              Submit
            </Button>
          </div>
          <hr className="w-full my-10" />
          <div className="">
            <h1 className="text-lg font-semibold">
              comment <span>({comments.length || 0})</span>
            </h1>
            {/* see all comment */}
            <div className="">
              {comments.length === 0 ? (
                <div className=" mt-5 w-full bg-slate-200 p-5  rounded-lg">
                  <h1 className="text-center text-xl md:text-3xl font-semibold my-5">
                    No comment available
                  </h1>
                </div>
              ) : (
                <div className="w-full mt-4 space-y-7">
                  {comments.map((comment, ind) => (
                    <CommentCart key={ind} comment={comment} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        "Not found User Data"
      )}
    </div>
  );
};

export default AddComment;
