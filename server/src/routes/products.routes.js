import express from "express";

// controllers
import {
  getAllProducts,
  createNewProduct,
} from "../controllers/products.controllers.js";

const router = express.Router();

router.get("/all", getAllProducts);
router.post("/create", createNewProduct);

export default router;
