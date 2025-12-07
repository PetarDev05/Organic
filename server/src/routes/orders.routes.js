import express from "express";
import {
  getAdminOrders,
  getAllOrders,
} from "../controllers/orders.controllers.js";
import { createNewOrder } from "../controllers/orders.controllers.js";

const router = express.Router();

router.route("/admin").get(getAdminOrders);
router.route("/:userId").get(getAllOrders).post(createNewOrder);

export default router;
