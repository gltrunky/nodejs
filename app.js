const express = require("express");
const app = express();

//Routers
const userRouter = require("./routes/user");

//Configuration des routers
app.use("/api", userRouter);

module.exports = app;
