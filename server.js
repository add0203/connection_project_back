// require("dotenv").config();
import "dotenv/config";
import express from "express";
import connectDB from "./db.js";
import userRoute from "./route/userRoute.js";
const app = express();

app.get("/", (req, res) => {
  res.send("Server is Ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 0,
      title: "hello 1",
      content: "good hello 1",
    },
    {
      id: 1,
      title: "hello 2",
      content: "good hello 1",
    },
    {
      id: 2,
      title: "hello 3",
      content: "good hello 1",
    },
  ];
  res.send(jokes);
});

app.use("/user", userRoute);

const port = process.env.PORT || 3000;

const start = async () => {
  //DB
  connectDB(process.env.DB_LINK);
  //server
  app.listen(port, () => {
    console.log(`server is running at http://localhost:${process.env.PORT}`);
  });
};

start();
