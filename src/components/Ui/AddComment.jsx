import { Button } from "@heroui/react";
import React from "react";

const AddComment = () => {
  const comments = [];
  return (
    <div className="">
      {/* comment box */}
      <div className="mt-10 border rounded-lg flex flex-col items-end gap-2 p-3 border-gray-400">
        <textarea
          name="comment"
          id="comment"
          placeholder="Add comment.."
          className="outline-none  border-gray-400 w-full min-h-30 rounded-lg "
        ></textarea>
        <Button value="outline" className={"rounded-xs "}>
          Submit
        </Button>
      </div>
      <hr className="w-full my-10" />
      <div className="">
        <h1 className="text-lg font-semibold">
          comment <span>(0)</span>
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
            <div className=""></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddComment;
