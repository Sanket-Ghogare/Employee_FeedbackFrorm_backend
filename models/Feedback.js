import { Schema, model } from "mongoose";

const feedbackSchema = new Schema({
  text: { type: String, required: true },
  category: { type: String, required: true },
  reviewed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default model("Feedback", feedbackSchema);