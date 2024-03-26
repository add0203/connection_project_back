import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose.connect(url);
  const db = mongoose.connection;
  db.once("open", () => {
    console.log("DB Connected");
  });
  db.on("error", (err) => {
    console.error("Connection error:", err);
  });
};

export { connectDB };

export default connectDB;
