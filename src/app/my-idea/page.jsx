import NoIdeasAdedd from "@/components/my-ideas/NoIdeasAdedd";
import UserIdeasCard from "@/components/my-ideas/UserIdeasCard";
import { auth } from "@/lib/auth";
import { getUserIdeas } from "@/lib/getData/data";
import { headers } from "next/headers";

export const metadata = {
  title: "My Idea - IdeaVault",
};

const MyIdeaPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const userData = session?.user;
  const userIdeas = await getUserIdeas(userData?.id);

  return (
    <div className="w-[90%] md:w-[80%] px-3 mx-auto pt-15 pb-20">
      <div className=" text-center space-y-3 px-3">
        <h1 className="text-2xl md:text-5xl font-bold font-banner">My Ideas</h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Manage, explore, and track all the innovative ideas you have shared on
          IdeaVault.
        </p>
      </div>

      {/* userIdeas Card */}
      <div className="">
        {userIdeas.length === 0 ? (
          <NoIdeasAdedd />
        ) : (
          <div className=" space-y-3.5 mt-8">
            {userIdeas.map((ideas) => (
              <UserIdeasCard key={ideas._id} ideas={ideas} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyIdeaPage;
