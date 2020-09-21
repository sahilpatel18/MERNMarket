const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = mongoose.model("Product").schema;

const OrderSchema = new Schema({
  products: [ProductSchema],
  userId: String,
  username: String,
  total: Number,
  created_at: { type: Date, required: true, default: Date.now },
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
