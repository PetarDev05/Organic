import Product from "../models/products.models.js";

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
