import Product from "../models/products.models.js";
import User from "../models/users.models.js";
import mongoose from "mongoose";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "Products fetched successfully",
      dispatchValue: products,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const createNewProduct = async (req, res) => {
  try {
    const { name, category, price, rating, image, about, bestSelling } =
      req.body;
    const newProduct = await Product.create({
      name,
      category,
      price,
      rating,
      image,
      about,
      bestSelling,
    });
    res.status(200).json({
      message: "New product created successfully",
      dispatchValue: newProduct,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const addProductToCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const { productId, quantity } = req.body;
    if (
      !mongoose.Types.ObjectId.isValid(userId) ||
      !mongoose.Types.ObjectId.isValid(productId)
    ) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    const user = await User.findOne({ _id: userId });
    const inCart = user.cart.find(
      (item) => item.productId.toString() === productId
    );
    if (inCart) {
      inCart.quantity += quantity;
      await user.save();
      return res.status(200).json({
        message: "Product quantity updated",
      });
    }
    const newItem = {
      productId,
      quantity,
    };
    user.cart.push(newItem);
    await user.save();
    res.status(200).json({
      message: "Product added to cart",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
