import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import express from "express";
import cors from "cors";

import contactHandler from "../api/contact.js";

const app = express();

app.use(cors());
app.use(express.json());

// Mimic Vercel serverless function locally
app.post("/api/contact", (req, res) => {
  return contactHandler(req, res);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`✅ Dev backend running at http://localhost:${PORT}`);
});
