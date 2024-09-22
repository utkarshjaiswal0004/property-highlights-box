const express = require("express");
const app = express();
const connectDB = require("./config/db");
const highlightRoutes = require("./routes/highlight-route");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

// Connect to the database
connectDB();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/highlight", highlightRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
