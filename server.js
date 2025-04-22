const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectdb = require("./db/connect")
const bookRoutes = require("./routes/bookRoutes");

require('dotenv').config();

const app = express();
app.use(express.json());

app.use("/api", bookRoutes);

mongoose.connect(process.env.MONGODB_URI)

  .then(() => {
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch(err => console.error("DB connection failed", err));
