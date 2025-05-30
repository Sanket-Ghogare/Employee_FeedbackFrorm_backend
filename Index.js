import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import feedbackRoutes from "./routes/feedbackRoutes.js";

const app = express();
app.use(cors());
app.use(json());

connect('mongodb+srv://sanketghogare75:LxEQbfouMGGYs4qu@cluster0.hg3kyfo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/feedback", feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));