"use client";

import { deleteComment } from "@/lib/getData/data";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { MdDeleteOutline } from "react-icons/md";

export function CommentDeleteModal({ comment }) {
  const router = useRouter();

  const handleDelete = async () => {
    const res = await deleteComment(comment._id);
    // console.log(res);
  };

  return (
    <AlertDialog>
      <Button className={"rounded-lg"} variant="danger">
        <MdDeleteOutline /> Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete comment permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>your comment.</strong>{" "}
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
