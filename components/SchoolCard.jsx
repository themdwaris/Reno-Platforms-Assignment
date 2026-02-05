

const SchoolCard=({ school }) =>{
  return (
    <div className="bg-white/15 rounded-lg shadow p-4 flex flex-col">
      <img
        src={school.image}
        alt={school.name}
        className="h-40 w-full object-cover rounded"
      />

      <div className="flex flex-col gap-2 mt-3 flex-1">
        <h3 className="font-semibold text-lg">{school.name}</h3>
        <p className="text-sm text-gray-400">{school.city}</p>
        <p className="text-sm text-gray-400">{school.state}</p>
      </div>
    </div>
  );
}

export default SchoolCard
