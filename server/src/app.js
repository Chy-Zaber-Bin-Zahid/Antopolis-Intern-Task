const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");

const { errorResponse } = require("./controllers/responseController");
const cors = require("cors");
// const animalRouter = require("./routers/animalRouter");
const categoryRouter = require("./routers/categoryRouter");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Router
app.use("/api", categoryRouter);

// Client error handling
app.use((req, res, next) => {
  next(createError(404, "route not found!"));
});

// Server error handling
app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
});

module.exports = app;
