"use client";
import React, { useEffect, useState } from "react";
import SchoolCard from "./SchoolCard";
import BackButton from "./BackButton";

const SchoolList = ({ schools }) => {
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  const searchFilter = () => {
    const filtered = schools?.filter(
      (item) =>
        item?.name?.toLowerCase()?.includes(search.toLocaleLowerCase()) ||
        item?.city?.toLowerCase()?.includes(search.toLocaleLowerCase()) ||
        item?.state?.toLowerCase()?.includes(search.toLocaleLowerCase()),
    );

    setFilterData(filtered);
  };

  useEffect(() => {
    if (schools.length > 0) {
      searchFilter();
    }
  }, [search, schools]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <BackButton
          destPath={"/"}
          classname={"my-6 bg-green-800 text-white/90"}
        />
        <input
          type="text"
          placeholder="Search schools"
          value={search}
          className="px-3 py-1.5 rounded-lg bg-white/15 border-none outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h1 className="text-xl font-semibold my-7 md:my-10">School List</h1>
      {!schools || schools.length === 0 ? (
        <div className="w-full py-16 flex items-center justify-center">
          <h1 className="text-xl">No records found yet</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
          {filterData &&
            filterData.length > 0 &&
            filterData?.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))}
        </div>
      )}
    </div>
  );
};

export default SchoolList;
