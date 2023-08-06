import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  description: { type: String },
  inventory: { type: Number },
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
