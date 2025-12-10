import express from "express";

// controllers
import {
  getAllProducts,
  createNewProduct,
  addProductToCart,
  getAllCartProducts,
  removeFromCart,
  manipulateStock,
  getAllAdminProducts,
  getCartLength,
} from "../controllers/products.controllers.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/all", getAllProducts);
router.get("/length/:userId", getCartLength)
router.post("/create", createNewProduct);
router.get("/admin/all", getAllAdminProducts);
router.patch("/:userId", addProductToCart);
router.get("/:userId", getAllCartProducts);
router.patch("/cart/:userId", removeFromCart);
router.patch("/stock/:productId", manipulateStock);

export default router;
