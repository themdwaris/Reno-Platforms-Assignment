"use client";
import BackButton from "@/components/BackButton";
import Loader from "@/components/Loader";
import SchoolCard from "@/components/SchoolCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSchools = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/schools");
      if (res?.data?.success) {
        setSchools(res.data.data);
        setLoading(false);
      } else {
        setLoading(false);
        toast.error("Failed to fetch schools");
      }
    } catch (error) {
      setLoading(false);
      console.log("failed to fetch schools data::", error);
    }
    // console.log("SCHOOLS 👉", res.data);
  };

  useEffect(() => {
    fetchSchools();
  }, []);

  return (
    <div>
      <BackButton
        destPath={"/"}
        classname={"my-6 bg-green-800 text-white/90"}
      />

      <h1 className="text-xl font-semibold my-7 md:my-10">School List</h1>
      {loading ? (
        <div className="w-full py-16 flex items-center justify-center">
          <Loader />
        </div>
      ) : !schools || schools.length === 0 ? (
        <div className="w-full py-16 flex items-center justify-center">
          <h1 className="text-xl">No records found yet</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
          {schools &&
            schools.length > 0 &&
            schools?.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ShowSchools;
