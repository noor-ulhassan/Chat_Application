import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// middleware
app.use(express.json());
app.use(cookieParser());

// routes

app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  dbConnect();
});
