import DataNotFoundPage from "@/components/Ui/DataNotFoundPage";
import IdeasPageCard from "@/components/Ui/IdeasPageCard";
import getAllIdeas from "@/lib/getData/data";
import { FcIdea } from "react-icons/fc";

export const metadata = {
  title: "Ideas - IdeaVault",
};

const IdeasPage = async () => {
  const allIdeas = await getAllIdeas();
  console.log(allIdeas);

  return (
    <div className="w-[90%] md:container mx-auto pt-15 space-y-4 pb-20">
      <h1 className="flex items-center gap-1 text-2xl sm:text-3xl md:text-5xl font-bold ">
        <FcIdea /> All Ideas
      </h1>

      <div className=" mt-10 ">
        {allIdeas.length === 0 ? (
          <div className="w-full">
            <DataNotFoundPage />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 gap-3.5 md:gap-6">
            {allIdeas.map((idea) => (
              <IdeasPageCard key={idea._id} idea={idea} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default IdeasPage;
