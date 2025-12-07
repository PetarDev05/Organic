import mongoose from "mongoose";

import Order from "../models/orders.models.js";
import User from "../models/users.models.js";

export const getAllOrders = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId });
    res.status(200).json({
      message: "Orders fetched successfully",
      orders,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const getAdminOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({
      message: "Orders fetched successfully",
      orders,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const createNewOrder = async (req, res) => {
  try {
    const { userId } = req.params;
    const { address, items, amount } = req.body;
    const createdOrder = await Order.create({
      address,
      items,
      amount,
      userId,
    });

    const user = await User.findOne({ _id: userId });
    user.cart = [];
    await user.save();

    res.status(200).json({
      message: "Order created successfully",
      createdOrder,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
