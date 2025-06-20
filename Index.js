import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import feedbackRoutes from "./routes/feedbackRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use("/feedback", feedbackRoutes);

app.get("/", (req, res) => {
  res.send({ activeStatus: true, error: false });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
