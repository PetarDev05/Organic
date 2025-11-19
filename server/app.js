// Dependencies
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Routers

export const app = express();

// Basic configuration
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(
  cors({
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "ALL", "OPTIONS"],
    credentials: true,
    origin: "http://localhost:5173",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middlewares
app.use(cookieParser());
app.use((req, res, next) => {
  console.log(`Request method: ${req.method}\nRequest path: ${req.path}`);
  next();
});

// Routing