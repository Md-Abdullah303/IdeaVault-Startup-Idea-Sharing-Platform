"use client";

import { editComment } from "@/lib/getData/data";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

export function CommentEditModal({ comment }) {
  const router = useRouter();
  //   console.log(comment);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDat = new FormData(e.currentTarget);
    const data = Object.fromEntries(formDat.entries());
    // console.log(data);
    const res = await editComment(comment._id, data);
    // console.log(res);
    if (res) {
      router.refresh();
      toast.success("comment was updated.");
    } else {
      toast.error("something was wrong");
    }
  };

  return (
    <Modal>
      <Button variant="outline" className={"rounded-xs"}>
        <FaEdit /> Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit comment</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <TextArea
                    defaultValue={comment?.userComment}
                    name="userComment"
                    aria-label="Quick project update"
                    className="h-32"
                    placeholder="Edit comment"
                  />

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">
                      Send Message
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
