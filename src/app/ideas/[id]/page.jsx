import AddComment from "@/components/Ui/AddComment";
import { auth } from "@/lib/auth";
import { getCommentByPostId, getIdeasById } from "@/lib/getData/data";
import { Avatar, Card, Chip } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";

const IdeasDetailsPage = async ({ params }) => {
  const { id } = await params;

  const idea = await getIdeasById(id);
  // console.log(idea);
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
    postedDate,
    userName,
    userEmail,
    userImage,
  } = idea;

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userData = session?.user;
  console.log(session);

  const token = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token);

  const comments = await getCommentByPostId(idea._id);

  return (
    <div className="w-[90%] md:w-[70%] mx-auto pt-15 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="h-100 overflow-hidden bg-cover bg-center w-full border rounded-lg">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className=" w-full h-full bg-cover bg-center rounded-lg overflow-hidden"
          />
        </div>
        <Card className="rounded-[14px] p-4 border items-start gap-2.5 justify-center">
          {/* user info */}
          <div className=" border-b pb-3 w-full flex items-center gap-4">
            <Avatar size="md">
              <Avatar.Image alt={userName} src={userImage} />
              <Avatar.Fallback>{userName.toUpperCase()[0]}</Avatar.Fallback>
            </Avatar>
            <div className="space-y-1">
              <h1 className="text-xl font-bold">{userName}</h1>
              <p className="text-gray-400">{userEmail}</p>
            </div>
          </div>
          <Chip color="success" className="text-2xl py-2 px-4">
            {tag}
          </Chip>
          <h1 className="text-xl md:text-4xl font-bold line-clamp-2">
            {title}
          </h1>
          <p className="text-lg md:text-xl font-semibold line-clamp-2">
            {shortDescription}
          </p>
          <p className="text-xl text-gray-400 md:text-3xl grid grid-cols-2 gap-2 w-full">
            <span>Estimated Budget :</span>{" "}
            <span>
              {typeof estimatedBudget == "number"
                ? estimatedBudget[0] == "$"
                  ? estimatedBudget
                  : `$${estimatedBudget}`
                : "Not Type a Number"}
            </span>
          </p>
          <p className="text-gray-400 text-xl md:text-3xl grid grid-cols-2 gap-2 w-full">
            <span>Posted date :</span>{" "}
            <span>
              {postedDate
                ? new Date(postedDate).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                : `May 12 2026`}
            </span>
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
      <AddComment comments={comments} idea={idea} />
    </div>
  );
};

export default IdeasDetailsPage;
