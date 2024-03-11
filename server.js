import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/UserRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import authUserRoutes from "./routes/authUserRoutes.js";

import connectToMONGODB from "./connectToMongoDB.js";
import { app, server } from "./socket/socket.js";
dotenv.config();


const PORT = process.env.PORT || 5001;
const _dirname = path.resolve();

//to parse incoming requests with JSON Payloads(from req.body)
app.use(express.json());
app.use(cookieParser()); // to parse incoming cookies from req.cookies

app.use("/api/user", userRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/authUser", authUserRoutes);

// app.get("/", (req, res) => {
//   res.send("WELCOME TO CHAT APP");
// });

server.listen(PORT, () => {
  connectToMONGODB();
  console.log("Server is listening to port", PORT);
});
