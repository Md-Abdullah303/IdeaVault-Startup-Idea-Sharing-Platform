import { getIdeasById } from "@/lib/getData/data";
import { Card, Chip } from "@heroui/react";

const IdeasDetailsPage = async ({ params }) => {
  const { id } = await params;

  const idea = await getIdeasById(id);
  console.log(idea);
  const {
    title,
    shortDescription,
    tag,
    estimatedBudget,
    targetAudience,
    category,
    image,
    problemStatement,
    proposedSolution,
    detailedDescription,
  } = idea;

  return (
    <div className="w-[90%] md:w-[70%] mx-auto pt-15 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="h-100 overflow-hidden w-full rounded-lg">
          <img
            src={image}
            alt={title}
            className=" w-full bg-contain bg-center rounded-lg overflow-hidden"
          />
        </div>
        <Card className="rounded-[14px] p-4 border items-start gap-4 justify-center">
          <Chip color="success" className="text-2xl py-2 px-4">
            {tag}
          </Chip>
          <h1 className="text-3xl md:text-6xl font-bold line-clamp-2">
            {title}
          </h1>
          <p className="text-xl md:text-3xl font-semibold line-clamp-2">
            {shortDescription}
          </p>
          <p className="text-xl text-gray-400 md:text-3xl grid grid-cols-2 gap-2 w-full">
            <span>Estimated Budget :</span> <span>{estimatedBudget}</span>
          </p>
          <p className="text-gray-400 text-xl md:text-3xl grid grid-cols-2 gap-2 w-full">
            <span>Posted date :</span> <span>May 12 2026</span>
          </p>
        </Card>
      </div>
      <div className="flex flex-col items-start gap-5 mt-10">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl md:text-4xl font-bold">{targetAudience}</h1>
          <Chip
            color="accent"
            className="bg-blue-100 border border-blue-400 py-2 px-4 text-xl"
          >
            {category}
          </Chip>
        </div>
        <p className="flex flex-col">
          <span className="text-2xl font-bold">Problem Statement : </span>
          <span className="text-lg text-gray-400">{problemStatement}</span>
        </p>
        <p className="flex flex-col">
          <span className="text-2xl font-bold">Problem Solution : </span>
          <span className="text-lg text-gray-400">{proposedSolution}</span>
        </p>
        <p className="flex flex-col">
          <span className="text-2xl font-bold">Detailed Description : </span>
          <span className="text-lg text-gray-400">{detailedDescription}</span>
        </p>
      </div>
    </div>
  );
};

export default IdeasDetailsPage;
