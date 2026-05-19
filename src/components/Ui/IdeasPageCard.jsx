import { Avatar, Button, Card, Chip, ToggleButton } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import IdeasPostEdit from "./IdeasPostEdit";
import { Heart } from "@gravity-ui/icons";

const IdeasPageCard = ({ idea }) => {
  // console.log(idea);
  const {
    _id,
    image,
    userName,
    userImage,
    postedDate,
    category,
    tag,
    shortDescription,
    title,
  } = idea;
  console.log(image);
  return (
    <Card className="rounded-[7px] p-3 flex flex-col gap-4 items-start overflow-hidden h-full">
      {/* posted user data */}
      <div className="px-3 pt-3 border-b w-full pb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar size="md">
            <Avatar.Image alt={userName} src={userImage} />
            <Avatar.Fallback delayMs={600}>
              {userName.toUpperCase()[(0, 2)]}
            </Avatar.Fallback>
          </Avatar>
          <div className="flex flex-col gap-1.5">
            <p className="text-lg leading-5 font-medium">{userName}</p>
            <p className="text-md leading-none text-muted">
              <span>
                {new Date(postedDate).toLocaleDateString("en-BD", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span>
                ,{" "}
                {new Date(postedDate).toLocaleTimeString("en-BD", {
                  minute: "numeric",
                  hour: "numeric",
                })}
              </span>
            </p>
          </div>
        </div>
        <IdeasPostEdit _id={_id} />
      </div>
      {/* card info */}
      <div className="flex-1 ">
        <h1>
          {shortDescription}
          <Link href={`/ideas/${_id}`} className="text-green-400">
            ...See more
          </Link>
        </h1>
      </div>
      {/* card img and chip */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          width={4000}
          height={2000}
          className="h-80 rounded-xl object-center object-cover"
        />
        <Chip
          color="accent"
          className="absolute bg-blue-100 border border-blue-400 top-3 right-2.5"
        >
          {category}
        </Chip>
      </div>
      <div className="flex items-center gap-2.5">
        <ToggleButton>
          <Heart />
          Like
        </ToggleButton>
        <Link className="" href={`/ideas/${_id}`}>
          <Button variant="outline">View Details</Button>
        </Link>
      </div>
    </Card>
  );
};

export default IdeasPageCard;
