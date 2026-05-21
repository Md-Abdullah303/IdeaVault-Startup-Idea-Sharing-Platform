import { Button, Card, Chip } from "@heroui/react";
import Link from "next/link";
import React from "react";

const FeaturedCard = ({ data }) => {
  // console.log(data);
  const {
    _id,
    image,
    shortDescription,
    category,
    estimatedBudget,
    tag,
    title,
  } = data;
  return (
    <Card className="rounded-xs p-0 dark-card">
      <div className="relative   h-150 w-full rounded-t-lg overflow-hidden ">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-center object-cover  "
        />
        <Chip
          color="accent"
          className="bg-blue-200 border border-blue-400 absolute top-3 left-3"
        >
          {category}
        </Chip>
        <Chip
          color="success"
          className="bg-green-200 border border-green-400 absolute top-3 right-3"
        >
          {tag}
        </Chip>
      </div>
      <div className="p-3 flex flex-col gap-3 items-start">
        <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
        <p className="text-lg text-gray-400">{shortDescription}</p>
        <p className="text-xl md:text-3xl text-green-400">
          {estimatedBudget[0] == "$" ? estimatedBudget : `$${estimatedBudget}`}
        </p>
        <Link href={`/ideas/${_id}`}>
          <Button className={"rounded-lg"} variant="outline">
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default FeaturedCard;
