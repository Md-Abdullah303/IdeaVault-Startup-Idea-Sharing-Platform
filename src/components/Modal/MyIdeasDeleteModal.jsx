"use client";

import { deleteIdea } from "@/lib/getData/data";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";

export function DeleteIdeas({ ideas }) {
  const { title, _id } = ideas;
  const router = useRouter();

  const handleDelete = async () => {
    const res = await deleteIdea(_id);
    console.log(res);
    if (res) {
      toast.success("Successfully deleted Idea!");
      router.refresh();
    }
  };

  return (
    <AlertDialog>
      <Button className={"rounded-xs"} variant="danger-soft">
        <MdDeleteOutline /> Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete your <span className="text-green-500">IDEA</span>{" "}
                permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p className="text-sm text-gray-500 leading-relaxed">
                This will permanently remove{" "}
                <span className="font-semibold text-red-500">{title}</span> from
                your ideas.
                <br />
                Once deleted, you won’t be able to recover it.
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
