# 📝 Practice Fullstack Notes CRUD

<p align="center">
  A simple fullstack CRUD application built to practice backend and frontend fundamentals.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Express-v5-black?logo=express" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-blue?logo=typescript" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql" />
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite" />
</p>

---

## 📖 About

This project was built as a way to practice building a complete CRUD application from scratch. The focus was on writing clean code, organizing the project properly, and understanding how the frontend and backend communicate.

Instead of adding lots of features, I kept the project simple so I could spend more time learning the fundamentals.

## 🚀 Tech Stack

### Backend

* Express 5
* TypeScript
* PostgreSQL
* Zod
* express-async-handler

### Frontend

* React
* Vite
* TypeScript
* React Router
* TanStack React Query
* React Hook Form
* Zod
* Axios
* Sonner

---

## ✨ Features

* Create notes
* View all notes
* Edit existing notes
* Delete notes
* Updates
* Form validation using Zod
* Toast notifications
* Centralized backend error handling

---

## 📂 Project Structure

```text
practice-fullstack-notes-crud
│
├── backend
│   ├── src
│   └── ...
│
└── frontend
    ├── src
    └── ...
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/anthon-louise/practice-fullstack-notes-crud.git
cd practice-fullstack-notes-crud
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file.

```env
PORT=5000

DB_USER=postgres
DB_PASSWORD=your_password
DB_PORT=5432
DB_NAME=crud
DB_HOST=localhost
```

Create the database table.

```sql
CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
```

Run the backend.

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will connect to the backend running on:

```text
http://localhost:5000
```

---

## 🎯 What I Practiced

* Structuring an Express + TypeScript backend
* Organizing routes, controllers, and database logic
* Server-side validation with Zod
* Centralized error handling
* React Query for server state management
* React Hook Form with Zod
* Page-based routing with React Router
* Building a simple REST API
* Connecting React to PostgreSQL through Express

---

## 📄 License

This project was created for learning and practice. Feel free to use it as a reference or build on top of it.
