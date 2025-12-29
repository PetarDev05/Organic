import express from "express";
import cors from "cors";
import { consoleMiddleware } from "./src/middlewares/console.middlewares.js";
import productsRouter from "./src/routes/products.routes.js";

export const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    origin: "https://organic-1-ow7z.onrender.com",
    allowedHeaders: "Content-type",
  })
);
app.use(consoleMiddleware);

app.use("/api/products", productsRouter);
