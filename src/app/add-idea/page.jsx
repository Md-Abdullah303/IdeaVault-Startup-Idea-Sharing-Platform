import AddIdeasForm from "@/components/allform/AddIdeasForm";
import { Button } from "@heroui/react";
import Link from "next/link";
import { LuArrowBigLeft } from "react-icons/lu";

export const metadata = {
  title: "Add Ideas - IdeaVault",
};

const AddIdeasPage = () => {
  return (
    <div className="w-[90%] md:container mx-auto pt-10 pb-15">
      <div className="space-y-2">
        <h1 className="text-xl md:text-3xl font-bold">
          Submit your Startup Ideas
        </h1>
        <Link href={"/ideas"}>
          <Button className={"rounded-xs"} variant="outline">
            <LuArrowBigLeft />
            Show All Ideas
          </Button>
        </Link>
      </div>

      {/* add ideas form */}
      <AddIdeasForm />
    </div>
  );
};

export default AddIdeasPage;
