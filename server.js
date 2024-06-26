// require("dotenv").config();
import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import userRoute from "./route/userRoute.js";
const app = express();

// const corsOptions = {
//   origin: "http://127.0.0.1:5501",
// };

const whitelist = [
  "https://connection-project-front-95tco86gd-add0203s-projects.vercel.app",
  "https://connection-project-back.vercel.app/",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  // origin: "https://connection-project-front-95tco86gd-add0203s-projects.vercel.app",
};

app.use(cors(corsOptions));

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
