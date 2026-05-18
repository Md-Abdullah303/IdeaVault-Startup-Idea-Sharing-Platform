import { Spinner } from "@heroui/react";

const loading = () => {
  return (
    <div>
      <div className="flex flex-col h-[65vh] items-center gap-2">
        <Spinner color="warning" />
      </div>
    </div>
  );
};

export default loading;
