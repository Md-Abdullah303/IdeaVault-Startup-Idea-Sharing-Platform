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
    <div className="w-[90%] md:w-[80%] mx-auto pt-15 pb-20 space-y-7">
      <div className="font-ibm space-y-2">
        <h1 className="text-2xl md:text-4xl font-bold">My Interactions</h1>
        <p className="text-gray-500">Edit and Delete your interactions</p>
      </div>

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
          <div className="space-y-4">
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
