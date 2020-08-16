const mongoose = require("mongoose");
const Review = require("./review.model").schema;
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  price: Number,
  quantity: Number,
  description: String,
  imgURL: String,
  reviews: [Review],
});


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
