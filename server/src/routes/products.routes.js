import express from "express";

// controllers
import {
  getAllProducts,
  createNewProduct,
  addProductToCart,
} from "../controllers/products.controllers.js";

const router = express.Router();

router.get("/all", getAllProducts);
router.post("/create", createNewProduct);
router.patch("/:userId", addProductToCart);

export default router;
