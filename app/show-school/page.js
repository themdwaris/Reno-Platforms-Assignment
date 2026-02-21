import SchoolList from "@/components/SchoolList";

// ***********Server side component************

export const revalidate = 60;
const ShowSchools = async () => {
  const res = await fetch("http://localhost:3000/api/schools");
  const { data } = await res.json();

  return (
    <>
      <SchoolList key={data?.id} schools={data} />
    </>
  );
};

export default ShowSchools;
