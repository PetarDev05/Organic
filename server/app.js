// Dependencies
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Routers
import productsRouter from "./src/routes/products.routes.js";
import usersRouter from "./src/routes/users.routes.js"
import ordersRouter from "./src/routes/orders.routes.js"

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
app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
app.use("/api/orders", ordersRouter);
