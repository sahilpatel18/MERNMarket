const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = mongoose.model("Product").schema;
const UserSchema = mongoose.model("User").schema;

const OrderSchema = new Schema({
  products: [ProductSchema],
  user: UserSchema,
  total: Number,
});

const Order = mongoose.model("Order", OrderSchema);


module.exports = Order;
