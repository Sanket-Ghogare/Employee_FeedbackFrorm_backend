import { Router } from "express";
import Feedback from "../models/Feedback.js";

const router = Router();

router.post("/", async (req, res) => {
  const { text, category } = req.body;
  try {
    const feedback = await Feedback.create({ text, category });
    res.status(201).json(feedback);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.get("/", async (req, res) => {
  const { category } = req.query;
  try {
    const filter = category ? { category } : {};
    const feedbacks = await Feedback.find(filter).sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.patch("/:id/reviewed", async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndUpdate(
      req.params.id, 
      { reviewed: true }, 
      { new: true }
    );
    if (!feedback) {
      return res.status(404).json({ error: "Feedback not found" });
    }
    res.json(feedback);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndDelete(req.params.id);
    if (!feedback) {
      return res.status(404).json({ error: "Feedback not found" });
    }
    res.json({ message: "Feedback deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;