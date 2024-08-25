import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.mjs";
import messageRoutes from "./routes/message.routes.mjs";
import userRoutes from "./routes/user.routes.mjs";

import connectToMongoDB from "./db/connectToMongoDB.mjs";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// ROUTES
app.get("/", (req, res) => {
  // root route : htt[]
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  connectToMongoDB(); 
  console.log(`Server running on port ${PORT}`);
});
