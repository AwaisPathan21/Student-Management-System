# Student Management System — MERN + MVC

A full-stack Student Management System built with the **MERN stack** (MongoDB, Express, React, Node.js) following the **MVC (Model-View-Controller)** architectural pattern.

---

## 📁 Project Structure

```
student-management-mern/
├── backend/                   ← Express + Node.js API
│   ├── config/
│   │   └── db.js              ← MongoDB connection
│   ├── controllers/           ← C (Controller) — business logic
│   │   ├── authController.js
│   │   └── studentController.js
│   ├── middleware/
│   │   └── authMiddleware.js  ← JWT protection
│   ├── models/                ← M (Model) — Mongoose schemas
│   │   ├── User.js
│   │   └── Student.js
│   ├── routes/                ← Route definitions
│   │   ├── authRoutes.js
│   │   └── studentRoutes.js
│   ├── .env                   ← Environment variables
│   └── server.js              ← Entry point
│
└── frontend/                  ← React + Vite (V = View)
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   └── StudentForm.jsx
    │   ├── pages/
    │   │   ├── Login.jsx
    │   │   └── Dashboard.jsx
    │   ├── services/
    │   │   └── api.js         ← Axios API calls
    │   ├── App.jsx            ← Router + Protected routes
    │   └── main.jsx
    └── index.html
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18+
- **MongoDB** running locally on port 27017

### 1. Start MongoDB
```bash
# macOS/Linux
mongod

# Windows (as a service, usually already running)
net start MongoDB
```

### 2. Backend Setup
```bash
cd backend
npm install
# Edit .env if needed (default DB: mongodb://localhost:27017/student_management)
npm run dev     # uses nodemon for auto-reload
# or
npm start
```

Backend runs on: **http://localhost:5000**

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: **http://localhost:5173**

---

## 🔑 Features

| Feature | Details |
|---------|---------|
| **Authentication** | JWT-based login/register with bcrypt password hashing |
| **Protected Routes** | React Router guards redirect unauthenticated users |
| **Student CRUD** | Create, Read, Update, Delete students |
| **Search** | Real-time server-side search by name, roll no, course |
| **MVC Structure** | Clean separation of Models, Controllers, Views |
| **Auto token** | Axios interceptor attaches JWT to every API request |

---

## 🔌 API Endpoints

### Auth
| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and get JWT |

### Students (all require `Authorization: Bearer <token>`)
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/students` | Get all students (optional `?search=`) |
| POST | `/api/students` | Add a student |
| PUT | `/api/students/:id` | Update a student |
| DELETE | `/api/students/:id` | Delete a student |

---

## ⚙️ Environment Variables (`backend/.env`)

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/student_management
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
```

---
