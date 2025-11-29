import express from "express";

// controllers
import {
  getAllProducts,
  createNewProduct,
  addProductToCart,
  getAllCartProducts,
  removeFromCart,
} from "../controllers/products.controllers.js";

const router = express.Router();

router.get("/all", getAllProducts);
router.post("/create", createNewProduct);
router.patch("/:userId", addProductToCart);
router.get("/:userId", getAllCartProducts);
router.patch("/cart/:userId", removeFromCart);

export default router;
