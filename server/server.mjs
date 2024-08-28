import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.mjs";
import messageRoutes from "./routes/message.routes.mjs";
import userRoutes from "./routes/user.routes.mjs";

import connectToMongoDB from "./db/connectToMongoDB.mjs";
import { app, server } from "./socket/socket.mjs";
import cors from "cors";
import path from "path";

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

dotenv.config();

// const app = express();
const PORT = process.env.PORT;

const __dirname = path.resolve();

app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// ROUTES
// app.get("/", (req, res) => {
//   // root route : htt[]
//   res.send("Hello, World!");
// });

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get("*", (req, res)=>{path.join(__dirname, 'client', 'dist', 'index.html')})

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
