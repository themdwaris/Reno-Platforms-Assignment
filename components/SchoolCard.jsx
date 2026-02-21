"use client";
import Image from "next/image";
import Link from "next/link";

const SchoolCard = ({ school }) => {
  return (
    <Link
      href={`/show-school/${school?.id}`}
      className="p-4 bg-white/15 rounded-lg cursor-pointer transition transform active:scale-75 shadow flex flex-col shrink-0"
    >
      <div className="relative w-full h-40">
        <Image
          src={school.image}
          alt={school.name}
          fill
          className="object-cover rounded"
        />
      </div>

      <div className="flex flex-col gap-2 mt-3 flex-1">
        <h3 className="font-semibold text-lg">{school.name}</h3>
        <p className="text-sm text-gray-400">{school.city}</p>
        <p className="text-sm text-gray-400">{school.state}</p>
      </div>
    </Link>
  );
};

export default SchoolCard;
