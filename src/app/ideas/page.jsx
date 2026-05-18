import getAllIdeas from "@/lib/getData/data";

export const metadata = {
  title: "Ideas - IdeaVault",
};

const IdeasPage = async () => {
  const allIdeas = await getAllIdeas();
  // console.log(allIdeas);

  return (
    <div>
      <h1>Idea</h1>
    </div>
  );
};

export default IdeasPage;
