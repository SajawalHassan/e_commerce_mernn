const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");
const itemRouter = require("./routes/items");

require("dotenv").config();

// Initializing express
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

// Routes middleware
app.use("/auth", authRouter);
app.use("/items", itemRouter);

// Connecting to database
mongoose.connect(process.env.DB_ACCESS_KEY, () =>
  console.log("Connnected to database")
);

// Running server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
