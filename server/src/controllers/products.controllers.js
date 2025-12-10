import Product from "../models/products.models.js";
import User from "../models/users.models.js";
import mongoose from "mongoose";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ inStock: true });
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

export const getCartLength = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    const cartLength = user.cart.length; 
    res.status(200).json({
      cartLength,
    })
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const getAllAdminProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const createNewProduct = async (req, res) => {
  try {
    const { name, category, price, rating, image, about, best, inStock } =
      req.body;
    const newProduct = await Product.create({
      name,
      category,
      price,
      rating,
      image,
      about,
      best,
      inStock,
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

export const manipulateStock = async (req, res) => {
  try {
    const { productId } = req.params;
    const updated = await Product.findOne({ _id: productId });
    updated.inStock = !updated.inStock;
    await updated.save();
    res.status(200).json({
      message: "Stock updated successfully",
      updated,
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
      newItem,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const getAllCartProducts = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const cart = await User.findOne({ _id: userId })
      .select("cart")
      .populate("cart.productId");

    res.status(200).json({
      message: "cart products",
      data: cart,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
    console.log(error.message);
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const { productId } = req.body;

    console.log("userId: ", userId);
    console.log("productId: ", productId);
    if (
      !mongoose.Types.ObjectId.isValid(userId) ||
      !mongoose.Types.ObjectId.isValid(productId)
    ) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      {
        $pull: { cart: { _id: productId } },
      },
      { new: true }
    );

    res.status(200).json({
      message: "Item removed from cart",
      user,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
