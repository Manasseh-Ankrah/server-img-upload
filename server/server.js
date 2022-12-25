const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const connectDB = require("./config/db");
const productRoute = require("./routes/productRoute");
const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use("/api/products", productRoute);

// Database Connection
connectDB();

app.get("/", (req, res) => {
  res.send("Active !!");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
