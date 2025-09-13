const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Serve uploaded files statically
app.use('/uploads', express.static('uploads'));

// Connect DB
connectDB();

// Routes
app.get("/", (req, res) => res.send("API running 🚀"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes")); // Tasks CRUD routes
app.use("/api/study-materials", require("./routes/studyMaterialRoutes")); // Study materials CRUD routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
