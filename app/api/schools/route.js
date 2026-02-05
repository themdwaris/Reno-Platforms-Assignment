
import cloudinary from "@/config/cloudinary";
import pool from "@/config/db";
import { initDB } from "@/config/init";
import fs from "fs";
import path from "path";

export async function GET() {
  
  try {
    const [rows] = await pool.query(
      `SELECT id, name, address, city, state, email, image, created_at 
       FROM schools 
       ORDER BY created_at DESC`
    );

    return Response.json({
      success: true,
      data: rows,
    });
  } catch (error) {
    console.error("GET schools error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to fetch schools",
      }),
      { status: 500 }
    );
  }
}

export async function POST(req) {
    
  try {
    const body = await req.json();
    const {
      name,
      address,
      city,
      state,
      phone,
      email,
      imageBase64,
    } = body;

    let imageUrl = "";

    // Manual upload to local public/schoolImages

    // if (imageBase64) {
    //   const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
    //   const buffer = Buffer.from(base64Data, "base64");

    //   const fileName = `${Date.now()}.png`;
    //   const uploadDir = path.join(process.cwd(), "public/schoolImages");

    //   if (!fs.existsSync(uploadDir)) {
    //     fs.mkdirSync(uploadDir, { recursive: true });
    //   }

    //   fs.writeFileSync(path.join(uploadDir, fileName), buffer);

    //   imagePath = `/schoolImages/${fileName}`;
    // }

    // Upload images to cloudinary to schoolImages folder
     if (imageBase64) {
      const uploadRes = await cloudinary.uploader.upload(imageBase64, {
        folder: "schoolImages",
      });

      imageUrl = uploadRes.secure_url;
    }

    await pool.query(
      `INSERT INTO schools 
      (name, address, city, state, phone, email, image)
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, address, city, state, phone, email, imageUrl]
    );

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return new Response("Image upload failed", { status: 500 });
  }
}
