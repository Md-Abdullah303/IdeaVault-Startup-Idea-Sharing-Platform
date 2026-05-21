import IdeasH1 from "@/components/gsap/ideasH1";
import DataNotFoundPage from "@/components/Ui/DataNotFoundPage";
import IdeasPageCard from "@/components/Ui/IdeasPageCard";
import IdeasSearch from "@/components/Ui/IdeasSearch";
import getAllIdeas from "@/lib/getData/data";
import { FcIdea } from "react-icons/fc";

export const metadata = {
  title: "Ideas - IdeaVault",
};

const IdeasPage = async ({ searchParams }) => {
  const sParams = await searchParams;
  const search = sParams?.search || "";
  const category = sParams?.filter || "";
  const shorting = sParams?.shorting || "";
  // console.log(search, category, shorting);
  const allIdeas = await getAllIdeas(search, category, shorting);
  // console.log(sParams);

  return (
    <div className="w-[90%] md:w-[80%] mx-auto pt-15 space-y-4 pb-20">
      <IdeasH1 />

      <IdeasSearch />

      <div className=" mt-10 ">
        {allIdeas.length === 0 ? (
          <div className="w-full">
            <DataNotFoundPage />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-3.5 md:gap-6">
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
