const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  price: Number,
  quantity: Number
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;


