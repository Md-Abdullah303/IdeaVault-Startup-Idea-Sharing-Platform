import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const IdeasPageCard = ({ idea }) => {
  //   console.log(idea);
  const { _id, image, category, tag, shortDescription, title } = idea;
  return (
    <Card className="rounded-[15px] p-0 space-y-4 overflow-hidden">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={4000}
          height={2000}
          className="h-80"
        />
        <Chip
          color="accent"
          className="absolute bg-blue-100 border border-blue-400 top-3 right-2.5"
        >
          {category}
        </Chip>
      </div>
      {/* card info */}
      <div className="space-y-3 px-3 pb-5">
        <div className="flex items-center gap-4 ">
          <h1 className="text-2xl font-bold">{title}</h1>
          <Chip color="success">{tag[0] || tag}</Chip>
        </div>
        <p className="line-clamp-2 text-gray-400">{shortDescription}</p>
        <Link href={`/ideas/${_id}`}>
          <Button variant="outline">View Details</Button>
        </Link>
      </div>
    </Card>
  );
};

export default IdeasPageCard;
