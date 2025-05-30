# 🗂️ Employee Feedback Portal – Backend

This is the backend for the Employee Feedback Portal built using **Node.js**, **Express.js**, and **MongoDB**. It supports anonymous employee feedback submission and administrative review via a RESTful API.

---

## 🚀 How to Run the App

1. **Install dependencies:**

   ```bash
   npm install

MONGO_URI=mongodb://localhost:27017/feedback_db
PORT=5000


The server will start on http://localhost:5000.

No user authentication is required — all submissions are anonymous.

Feedback is text-based and categorized as: Work Environment, Leadership, Growth, or Others.

Admin functionality is handled entirely from the frontend — no admin auth.

A single boolean field reviewed is used to track admin status.

What’s Complete
✅ Feedback submission API (POST /feedback)

✅ Feedback listing with optional filtering (GET /feedback)

✅ Mark feedback as reviewed (PATCH /feedback/:id/reviewed)

✅ Delete feedback (DELETE /feedback/:id)

✅ MongoDB integration using Mongoose

✅ CORS and JSON middleware support

✅ Environment configuration with dotenv

backend/
├── models/
│   └── Feedback.js
├── routes/
│   └── feedbackRoutes.js
├── server.js
├── .env
├── .gitignore
└── package.json



Let me know if you'd like a combined README for both frontend and backend or want a markdown version exported to your file structure.
