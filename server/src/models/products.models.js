import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    about: [{ type: String, required: true }],
    best: {
      type: Boolean,
      required: true,
    },
    inStock: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productsSchema);

export default Product;
