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


const result1 = Order.aggregate(
  [
    {
      $group:
        {
          totalAmount: { $sum: { $multiply: [ "$$price", "$$quantity" ] } },
          count: { $sum: 1 }
        }
    }
  ]
)

console.log(result1);



module.exports = Order;
