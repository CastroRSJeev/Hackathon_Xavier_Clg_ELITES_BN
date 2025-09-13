const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("API is running with MongoDB Atlas 🚀");
});

// Import Routes (later you’ll add auth & CRUD routes here)
// const authRoutes = require("./routes/authRoutes");
// app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
