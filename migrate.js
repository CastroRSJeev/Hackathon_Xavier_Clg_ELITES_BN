const mongoose = require("mongoose");
const User = require("./models/User"); // adjust path if needed
require("dotenv").config();

async function ensureCollections() {
  try {
    // connect to MongoDB Atlas (or local if you want)
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");

    // Insert a dummy doc with required fields
    const dummy = await User.create({
      name: "init",
      email: "init@example.com",
      password: "initpass",
      role: "user",
      department: "init-dept",
    });

    console.log("✅ Dummy user created");

    // Clean up (delete dummy user so only schema remains)
    await User.deleteOne({ _id: dummy._id });
    console.log("✅ Dummy user deleted");

    console.log("✅ Users collection ensured");
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Error:", err);
    mongoose.disconnect();
  }
}

ensureCollections();
