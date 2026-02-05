"use client";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="w-full -mt-16 h-[calc(100vh-56px)] flex flex-col items-center justify-center">
      <h1 className="text-center my-8 text-3xl md:text-5xl font-semibold">
        Reno Platforms
      </h1>
      <div className="flex items-center justify-center gap-3.5">
        <Link href="/add-school" className="px-3 py-1.5 rounded-lg bg-green-800 text-base font-semibold cursor-pointer transition transform active:scale-90">
          Add school
        </Link>
        <Link href="/show-school" className="px-3 py-1.5 rounded-lg bg-green-800 text-base font-semibold cursor-pointer transition transform active:scale-90">Show school</Link>
      </div>
    </div>
  );
};

export default Home;
