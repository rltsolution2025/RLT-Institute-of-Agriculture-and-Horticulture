import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes.js";
import path from "path";

dotenv.config();
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB connected"))
    .catch(err => { console.error("❌ MongoDB connection error:", err.message); process.exit(1); });

//routes
app.use("/api/contact", contactRoutes);

//health check
app.use((err, req, res, next) => {
    console.error("Global error", err.stack);
    res.status(500).json({ success: false, message: "Internal Server error" })
});

const PORT = process.env.Port || 3000;
app.listen(PORT, () =>console.log(`🚀 Server running on port ${PORT}`))