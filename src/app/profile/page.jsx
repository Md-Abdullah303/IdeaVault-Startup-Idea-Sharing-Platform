import UserPaiChart from "@/components/Ui/UserPaiChart";
import UserTable from "@/components/Ui/UserTable";
import { UserUpdateProfileModal } from "@/components/Ui/UserUpdateProfileModal";
import { auth } from "@/lib/auth";
import { getCommentByUserId, getUserIdeas } from "@/lib/getData/data";
import { Button, Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const userData = session?.user;
  const { image, name, id, createdAt, email } = userData;
  //   console.log(userData);

  const interactions = await getCommentByUserId(id);
  const usersPots = await getUserIdeas(id);

  return (
    <div className="w-[90%] md:w-[80%] mx-auto pt-15 pb-20 space-y-4">
      <div className="flex items-center gap-1">
        <h1 className="text-green-800 w-40 font-semibold  text-center">
          My Profile
        </h1>
        <hr className="w-full" />
      </div>
      {/* user info  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Card className="  rounded-lg p-4 flex  items-center justify-center gap-4">
          <div className="">
            <Image
              src={image}
              alt="name"
              width={120}
              height={120}
              className="h-40 w-40 object-center object-cover rounded-full overflow-hidden  border-4 border-white shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            />
          </div>
          <div className="flex items-center text-center flex-col gap-2.5">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className=" text-gray-400">{email}</p>
          </div>
          <UserUpdateProfileModal />
        </Card>
        <Card className="rounded-lg hover:-translate-y-1 hover:shadow-2xl duration-300 border shadow-lg  p-3 flex flex-col items-center justify-center gap-1">
          <UserPaiChart usersPots={usersPots} interactions={interactions} />
        </Card>
      </div>
      {/* your interactions and posted ideas */}
      <Card className=" font-m rounded-lg py-10 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        <Card className="rounded-lg hover:-translate-y-1 hover:shadow-2xl duration-300 border shadow-lg bg-slate-100 dark:dark:bg-[#222831] p-3 flex flex-col items-center justify-center gap-1">
          <h1 className="text-2xl font-bold text-orange-500">
            💬 interactions
          </h1>
          <p className="text-4xl font-semibold text-gray-400">
            {interactions.length || 0}
          </p>
        </Card>
        <Card className="rounded-lg hover:-translate-y-1 hover:shadow-2xl duration-300 border dark:dark:bg-[#222831] shadow-lg bg-slate-100 p-3 flex flex-col items-center justify-center gap-1">
          <h1 className="text-2xl font-bold text-cyan-500">🚀 posts</h1>
          <p className="text-4xl font-semibold text-gray-400">
            {usersPots.length || 0}
          </p>
        </Card>
        <Card className="rounded-lg hover:-translate-y-1 hover:shadow-2xl dark:dark:bg-[#222831] duration-300 border shadow-lg bg-slate-100 p-3 flex flex-col items-center justify-center gap-1">
          <p className="text-sm text-gray-400">
            Joined {new Date(createdAt).toLocaleDateString()}
          </p>
        </Card>
      </Card>
      <div className=" mt-10">
        <small className="text-gray-400">
          Your Ideas <span>({usersPots.length || 0})</span>
        </small>
        {usersPots.length === 0 ? (
          <div
            className=" bg-slate-600 text-white flex flex-col items-center justify-center gap-2 py-20 
          "
          >
            <h1 className="text-xl md:text-3xl font-bold">
              User Have no Ideas
            </h1>
            <Link className="text-purple-500" href={"/add-ideas"}>
              Want Add some ideas?
            </Link>
          </div>
        ) : (
          <div className="mt-5">
            <UserTable usersPots={usersPots} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfilePage;
