import Loader from "@/components/Loader";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full  h-[calc(100vh-100px)] flex items-center justify-center">
      <Loader />
    </div>
  );
};

export default Loading;
