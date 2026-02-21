import SchoolList from "@/components/SchoolList";
import pool from "@/config/db";

// ***********Server side component************

export const revalidate = 60;
const ShowSchools = async () => {
  const [rows] = await pool.query(
      `SELECT id, name, address, city, state, email, image, created_at 
       FROM schools 
       ORDER BY created_at DESC`
    );

    const data = rows

  return (
    <>
      <SchoolList key={data?.id} schools={data} />
    </>
  );
};

export default ShowSchools;
