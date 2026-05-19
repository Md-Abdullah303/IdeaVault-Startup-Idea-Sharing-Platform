"use client";
import { addIdeas } from "@/lib/getData/data";
import { Button, Input, Label, TextArea } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const AddIdeasForm = () => {
  const router = useRouter();
  const validateImageURL = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const ideaData = {
      title: formData.get("title"),
      shortDescription: formData.get("shortDescription"),
      tag: formData.get("tag") || null,
      estimatedBudget: Number(formData.get("estimatedBudget")) || null,
      targetAudience: formData.get("targetAudience"),
      category: formData.get("category"),
      image: formData.get("image"),
      problemStatement: formData.get("problemStatement"),
      proposedSolution: formData.get("proposedSolution"),
      detailedDescription: formData.get("detailedDescription"),
      postedDate: new Date(),
    };

    const imageURL = ideaData.image;
    const isValid = await validateImageURL(imageURL);

    if (!isValid) {
      toast.error("Image URL is not valid. Please provide a correct URL.");
      return;
    }

    console.log(ideaData);
    const res = await addIdeas(ideaData);
    console.log(res);
    if (res.acknowledged) {
      router.push("/ideas");
      // e.currentTarget.reset();
      toast.success("Idea added successfully..");
    }
  };

  return (
    <div>
      <form
        className="border mt-5 max-w-xl py-3 px-5 rounded-lg bg-white dark:bg-[#3b4555] overflow-hidden space-y-4 mx-auto"
        onSubmit={onSubmit}
      >
        {/* idea title */}
        <div className="flex flex-col gap-1">
          <Label className="text-xl">Idea Title</Label>
          <Input
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
            required
            name="shortDescription"
            className="!bg-slate-100 border shadow-none border-gray-200 dark:!border-[#282b33] dark:!bg-[#222831] rounded-xs outline-none"
            id="name"
            placeholder="Short Description"
            type="text"
          />
        </div>

        {/* tags && Estimated Budget (optional) && Target Audience && Category */}
        <div className="grid grid-cols-2 gap-3.5">
          {/* Tags (optional) */}
          <div className="flex flex-col gap-1">
            <Label className="text-xl">Tags (optional)</Label>
            <Input
              name="tag"
              className="!bg-slate-100 border shadow-none border-gray-200 dark:!border-[#282b33] dark:!bg-[#222831] rounded-xs outline-none"
              id="name"
              placeholder="Enter Ideas Tags"
              type="text"
            />
          </div>

          {/* Estimated Budget (optional) */}
          <div className="flex flex-col gap-1">
            <Label className="text-xl">Estimated Budget (optional)</Label>
            <Input
              name="estimatedBudget"
              className="!bg-slate-100 border shadow-none border-gray-200 dark:!border-[#282b33] dark:!bg-[#222831] rounded-xs outline-none"
              id="name"
              placeholder="Enter Estimated Budget (USD)"
              type="text"
            />
          </div>

          {/* Target Audience */}
          <div className="flex flex-col gap-1">
            <Label className="text-xl">Target Audience</Label>
            <Input
              required
              name="targetAudience"
              className="!bg-slate-100 border shadow-none border-gray-200 dark:!border-[#282b33] dark:!bg-[#222831] rounded-xs outline-none"
              id="name"
              placeholder="Target Audience"
              type="text"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col items-start gap-1">
            <Label className="text-xl">Category</Label>
            <select
              required
              name="category"
              className="border py-2 dark:!border-[#282b33] dark:!bg-[#222831] px-3 w-full !bg-slate-100  border-gray-200 rounded-xs"
            >
              <option value="">Select Category</option>
              <option defaultChecked value="Tech">
                Tech
              </option>
              <option value="Health">Health</option>
              <option value="AI">AI</option>
              <option value="Education">Education</option>
            </select>
          </div>
        </div>

        {/* imageUrl */}
        <div className="flex flex-col gap-1">
          <Label className="text-xl">Image URL</Label>
          <Input
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
            <Label className="text-xl">Problem Statement</Label>

            <TextArea
              required
              name="problemStatement"
              aria-label="Quick project update"
              className="h-32 dark:!border-[#282b33] dark:!bg-[#222831] w-full !bg-slate-100 border shadow-none border-gray-200 rounded-xs outline-none"
              placeholder="Problem Statement"
            />
          </div>

          {/* Proposed Solution */}
          <div className="">
            <Label className="text-xl">Proposed Solution</Label>

            <TextArea
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
          Add Idea
        </Button>
      </form>
    </div>
  );
};

export default AddIdeasForm;
