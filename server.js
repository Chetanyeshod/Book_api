const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectdb = require("./db/connect")
const bookRoutes = require("./routes/bookRoutes");

require('dotenv').config();

const app = express();
// Middleware
app.use(express.json());
// Routes
app.use("/api", bookRoutes);

// Connect DB and start server
mongoose.connect(process.env.MONGODB_URI)

app.listen(process.env.PORT || 3000,    console.log(`server is running on ${process.env.PORT || 3000}`))
