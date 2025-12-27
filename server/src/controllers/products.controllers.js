import { Product } from "../models/products.models.js";

export const getAllProducts = async (req, res) => {
  try {
    const { category, searchTerm } = req.query;
    let query = {};

    if (category) {
      query.category = category;
    }

    if (searchTerm) {
      query.name = { $regex: searchTerm.trim(), $options: "i" };
    }

    const products = await Product.find(query);
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
    const { name, category, price, rating, image, about } = req.body;
    const newProduct = await Product.create({
      name,
      category,
      price,
      rating,
      image,
      about,
    });
    res.status(200).json({
      message: "New product created successfully",
      newProduct,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
