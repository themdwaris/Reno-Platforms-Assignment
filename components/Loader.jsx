import React from "react";

const Loader = ({className="w-12 h-12"}) => {
  return (
    <div className={`${className} border-4 border-t-green-800 border-gray-300 rounded-full animate-spin`}></div>
  );
};

export default Loader;
