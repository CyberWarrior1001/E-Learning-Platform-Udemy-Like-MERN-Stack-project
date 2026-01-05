# 🎓 E-Learning Platform (Udemy-Like) — MERN Stack

A **full-stack E-Learning marketplace** built with **MERN stack technologies**, where users can **create, sell, purchase, and watch courses online**.  
The platform is inspired by modern learning systems like **Udemy**, focusing on performance, scalability, and a smooth learning experience.

---


## 🚀 Tech Stack

### Frontend
- ⚛️ React (Vite)
- 🎨 Tailwind CSS
- 🔗 Axios
- 🌐 React Router DOM
- 🧠 Redux store

### Backend
- 🟢 Node.js
- 🚂 Express.js
- 🍃 MongoDB (Mongoose)
- 🔐 JWT Authentication
- 📦 Multer (file & video uploads)
- ☁️ Cloudinary / Local Storage (media handling)

---

## ✨ Core Features

### 👤 Users
- User authentication (Signup / Login)
- Buy courses
- Watch purchased courses
- Track learning progress

### 👨‍🏫 Instructors
- Create and upload courses
- Upload course videos & resources
- Manage own courses
- Earn by selling courses

### 📚 Courses
- Course listing & search
- Course details page
- Video streaming
- Secure access to purchased content

### 🔒 Security
- JWT-based authentication
- Protected routes
- Role-based access (User / Instructor)

---

## 📂 Project Structure

LMS_APP/
│
├── client/ # Vite + React frontend
│ ├── src/
│ ├── public/
│ └── vite.config.js
│
├── server/ # Node.js + Express backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ ├── config/
│ └── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md


---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/LMS.git
cd LMS
```

---
## 2️⃣ Backend Setup
```bash
cd server
npm install -y
```
Create a .env file inside server/:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start backend:

```bash
npm run dev
```

## 3️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```
