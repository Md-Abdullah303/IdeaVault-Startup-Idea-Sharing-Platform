import MyIdeash1 from "@/components/gsap/MyIdeash1";
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
  console.log(userIdeas);

  return (
    <div className="w-[90%] md:w-[80%] px-3 mx-auto pt-15 pb-20">
      <MyIdeash1 />

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
