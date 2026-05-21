import MyIntractionsH1 from "@/components/gsap/MyIntractionsH1";
import InteractionsCart from "@/components/Ui/InteractionsCart";
import NoInteractionsFound from "@/components/Ui/NoInteractionsFound";
import { auth } from "@/lib/auth";
import { getCommentByUserId } from "@/lib/getData/data";
import { headers } from "next/headers";

export const metadata = {
  title: "My Interactions - IdeaVault",
};

const MyInteractionsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const userData = session?.user;
  const userComments = await getCommentByUserId(userData?.id);
  // console.log(userComments);
  return (
    <div className="w-[90%] md:w-[80%] mx-auto pt-15 pb-10 md:pb-20 space-y-7">
      <MyIntractionsH1 />

      <div
        className={`space-y-3.5 
          ${userComments.length === 1 && "mb-[35vh]"}
          ${userComments.length === 2 && "mb-[30vh]"}
          ${userComments.length === 3 && "mb-[28vh]"}
          ${userComments.length === 4 && "mb-[24vh]"}
          `}
      >
        <small className="text-gray-400 ">UP NEXT({userComments.length})</small>
        {userComments.length === 0 ? (
          <NoInteractionsFound />
        ) : (
          <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3.5">
            {userComments.map((comment, ind) => (
              <InteractionsCart key={ind} comment={comment} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyInteractionsPage;
