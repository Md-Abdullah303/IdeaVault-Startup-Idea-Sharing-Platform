import AddIdeasForm from "@/components/allform/AddIdeasForm";
import AddIdeaH1 from "@/components/gsap/AddIdeaH1";

export const metadata = {
  title: "Add Ideas - IdeaVault",
};

const AddIdeasPage = () => {
  return (
    <div className="w-[90%] md:w-[70%] mx-auto pt-10 pb-15">
      <AddIdeaH1 />

      {/* add ideas form */}
      <AddIdeasForm />
    </div>
  );
};

export default AddIdeasPage;
