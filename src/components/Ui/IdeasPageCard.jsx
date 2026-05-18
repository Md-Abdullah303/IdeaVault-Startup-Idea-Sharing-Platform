import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const IdeasPageCard = ({ idea }) => {
  //   console.log(idea);
  const { _id, image, category, tag, shortDescription, title } = idea;
  console.log(image);
  return (
    <Card className="rounded-[15px] p-0 flex flex-col gap-4 items-start overflow-hidden h-full">
      <div className="relative">
        <img
          src={image}
          alt={title}
          width={4000}
          height={2000}
          className="h-80 object-center object-cover"
        />
        <Chip
          color="accent"
          className="absolute bg-blue-100 border border-blue-400 top-3 right-2.5"
        >
          {category}
        </Chip>
      </div>
      {/* card info */}
      <div className="flex-1 flex gap-2.5 flex-col items-start px-3 pb-5">
        <div className="space-y-3 flex-1">
          <div className="flex items-start gap-4 ">
            <h1 className="text-2xl font-bold">{title}</h1>
            {tag && <Chip color="success">{tag}</Chip>}
          </div>
          <p className="line-clamp-2 text-gray-400">{shortDescription}</p>
        </div>
        <Link className="" href={`/ideas/${_id}`}>
          <Button variant="outline">View Details</Button>
        </Link>
      </div>
    </Card>
  );
};

export default IdeasPageCard;
