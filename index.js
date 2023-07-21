require("dotenv").config();
const express = require("express");
const app = express();

require("express-async-error");
//connectDb
const connectDB = require("./database/connect");

//routers
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

//error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());
//other packages

//routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.Port || 5000;

const start = async () => {
  try {
    //connect to database
    await connectDB(process.env.MONGO);
    app.listen(port, console.log(`listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
