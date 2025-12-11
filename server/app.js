import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import productsRouter from "./src/routes/products.routes.js";
import usersRouter from "./src/routes/users.routes.js"
import ordersRouter from "./src/routes/orders.routes.js"

export const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "ALL", "OPTIONS"],
    credentials: true,
    origin: "http://localhost:5173",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cookieParser());
app.use((req, res, next) => {
  console.log(`Request method: ${req.method}\nRequest path: ${req.path}`);
  next();
});

app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
app.use("/api/orders", ordersRouter);
