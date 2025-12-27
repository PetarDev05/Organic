import { Router } from "express";
import {
  createNewProduct,
  getAllProducts,
} from "../controllers/products.controllers.js";

const router = Router();

router.route("/").get(getAllProducts).post(createNewProduct);

export default router;
