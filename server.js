require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoutes");

const errorHandler = require("./middleware/errorMiddleware");
const notFound = require("./middleware/notFound");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/orders", orderRoutes);

app.use("/api/products", productRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("<h1>Coffee Shop System Server is Running!</h1>");
});

const PORT = process.env.PORT || 5000;

// MongoDB Connection
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() =>
      console.log("✅ MongoDB Connected Successfully")
    )
    .catch((err) =>
      console.log("❌ MongoDB Connection Error:", err)
    );
} else {
  console.log(
    "⚠️ MONGO_URI not found in .env file. Skipping DB connection."
  );
}

// Middleware
app.use(notFound);

app.use(errorHandler);

// Server Start
app.listen(PORT, () => {
  console.log(`
🚀 Server successfully started!
📡 Port: ${PORT}
🔗 Link: http://localhost:${PORT}
  `);
});