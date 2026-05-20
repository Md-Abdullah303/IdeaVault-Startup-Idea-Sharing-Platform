"use client";

import { updateIdea } from "@/lib/getData/data";
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
import { FaEdit, FaSave } from "react-icons/fa";

export function MyIdeasEditModal({ ideas }) {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const editedData = Object.fromEntries(formData.entries());
    console.log(editedData);

    const res = await updateIdea(ideas._id, editedData);
    // console.log(res);
    if (res) {
      toast.success("Idea was updated");
      router.refresh();
    }
  };

  return (
    <Modal>
      <Button className={"rounded-xs"} variant="outline">
        <FaEdit /> Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit Your Ideas</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className=" space-y-4 " onSubmit={onSubmit}>
                  {/* idea title */}
                  <div className="flex flex-col gap-1">
                    <Label className="text-xl">Idea Title</Label>
                    <Input
                      defaultValue={ideas?.title}
                      required
                      name="title"
                      className="!bg-slate-100 border shadow-none border-gray-200 rounded-xs dark:!border-[#282b33] dark:!bg-[#222831] outline-none"
                      id="name"
                      placeholder="Enter your Idea"
                      type="text"
                    />
                  </div>

                  {/* Short Description */}
                  <div className="flex flex-col gap-1">
                    <Label className="text-xl">Short Description</Label>
                    <Input
                      defaultValue={ideas?.shortDescription}
                      required
                      name="shortDescription"
                      className="!bg-slate-100 border shadow-none border-gray-200 dark:!border-[#282b33] dark:!bg-[#222831] rounded-xs outline-none"
                      id="name"
                      placeholder="Short Description"
                      type="text"
                    />
                  </div>

                  {/* imageUrl */}
                  <div className="flex flex-col gap-1">
                    <Label className="text-xl">Image URL</Label>
                    <Input
                      defaultValue={ideas?.image}
                      required
                      name="image"
                      className="!bg-slate-100 dark:!border-[#282b33] dark:!bg-[#222831] border shadow-none border-gray-200 rounded-xs outline-none"
                      id="name"
                      placeholder="Enter ImageURL"
                      type="text"
                    />
                  </div>

                  {/* problem statement && solution */}
                  <div className="grid grid-cols-2 gap-3.5">
                    {/* Problem Statement */}
                    <div className="">
                      <Label className="text-lg">Problem Statement</Label>

                      <TextArea
                        defaultValue={ideas?.problemStatement}
                        required
                        name="problemStatement"
                        aria-label="Quick project update"
                        className="h-32 dark:!border-[#282b33] dark:!bg-[#222831] w-full !bg-slate-100 border shadow-none border-gray-200 rounded-xs outline-none"
                        placeholder="Problem Statement"
                      />
                    </div>

                    {/* Proposed Solution */}
                    <div className="">
                      d<Label className="text-lg">Proposed Solution</Label>
                      <TextArea
                        defaultValue={ideas?.proposedSolution}
                        required
                        name="proposedSolution"
                        aria-label="Quick project update"
                        className="h-32 dark:!border-[#282b33] dark:!bg-[#222831] w-full !bg-slate-100 border shadow-none border-gray-200 rounded-xs outline-none"
                        placeholder="Proposed Solution"
                      />
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <div className="">
                    <Label className="text-xl">Detailed Description</Label>

                    <TextArea
                      required
                      defaultValue={ideas?.detailedDescription}
                      name="detailedDescription"
                      aria-label="Quick project update"
                      className="h-32 w-full dark:!border-[#282b33] dark:!bg-[#222831] !bg-slate-100 border shadow-none border-gray-200 rounded-xs outline-none"
                      placeholder="Detailed Description"
                    />
                  </div>

                  <Button
                    type="submit"
                    className={"w-full rounded-none"}
                    variant="primary"
                  >
                    <FaSave />
                    Save edit
                  </Button>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
