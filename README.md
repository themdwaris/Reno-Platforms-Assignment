# School Management Assignment

This project is a simple **School Management web application** built using **Next.js (App Router)**. The application allows users to **add schools with images** and **view a list of schools**. It uses a MySQL database and Cloudinary for image storage.

---

## 🚀 Tech Stack

* **Frontend & Backend:** Next.js (App Router, JavaScript)
* **Styling:** Tailwind CSS
* **Database:** MySQL (hosted on a free provider)
* **ORM / Driver:** mysql2
* **Image Upload:** Cloudinary
* **HTTP Client:** Axios
* **Form Handling:** react-hook-form

---

## 📁 Project Structure

```
app/
 ├─ api/
 │   └─ schools/
 │       └─ route.js        # GET & POST APIs
 ├─ schools/
 │   └─ page.js             # School list page
 ├─ add-school/
 │   └─ page.js             # Add school form

components/
 ├─ SchoolCard.jsx
 ├─ BackButton.jsx
 └─ InputBox.jsx

config/
 ├─ db.js                   # MySQL connection (pool)
 └─ cloudinary.js           # Cloudinary config

.env.local
```

---

## ✨ Features

* Add a new school with:

  * Name
  * Address
  * City
  * State
  * Email
  * School Image
* Upload school images to **Cloudinary**
* View all schools in a responsive grid layout
* Server-side API using Next.js App Router

---

## 🔌 API Endpoints

### 1️⃣ Get all schools

```
GET /api/schools
```

### 2️⃣ Add a new school

```
POST /api/schools
```

---

## 🖼️ Image Upload Approach (Important)

Initially, images were planned to be uploaded to the local `public/` folder. However, since platforms like **Vercel and Netlify use a serverless file system**, local file uploads are **not persistent in production**.

### ✅ Final Approach Used

* Images are converted to **Base64** on the client
* Uploaded to **Cloudinary** from the API route
* Cloudinary returns a **secure URL**
* The URL is stored in the database

This approach ensures:

* Images are accessible in production
* No file system dependency
* Scalable and deployment-safe solution

---

## ⚠️ Interview Catch (Important Explanation)

The project uses a **free hosted MySQL database**, which has **strict connection limits**. In serverless environments like Next.js App Router, multiple API invocations can temporarily exceed these limits, leading to connection errors.

### How this is handled:

* Connection pooling is used
* Table creation is handled manually (not on runtime)
* For production, a managed DB like **PlanetScale or Railway** is recommended

This is a known limitation of free database tiers, not a code issue.

---

## 🛠️ Environment Variables

Create a `.env.local` file and add:

```
DATABASE_URL=your_mysql_database_uri

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## ▶️ How to Run Locally

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

## ✅ Conclusion

This project demonstrates:

* Full-stack development using Next.js App Router
* Practical handling of image uploads in serverless environments
* Clean API and component structure
* Awareness of real-world deployment constraints

---

**Author:** Mohammad Waris
