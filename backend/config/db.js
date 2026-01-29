import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const dbConnect = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log("Database connection failed", err);
    });
};

export default dbConnect;
