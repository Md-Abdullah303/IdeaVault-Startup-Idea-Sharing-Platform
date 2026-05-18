import { Spinner } from "@heroui/react";

const loading = () => {
  return (
    <div className="h-[65vh] flex items-center justify-center">
      <div className="flex flex-col  items-center gap-2">
        <Spinner color="warning" />
      </div>
    </div>
  );
};

export default loading;
