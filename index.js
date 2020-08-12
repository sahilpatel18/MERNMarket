require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;
const shoproutes = require("./routes/index");
const cookieParser = require("cookie-parser");

app.use(bodyParser.json())
app.use(cookieParser());
app.use("/api", shoproutes);

 
mongoose.connect(
  URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("MongoDb connection Succeeded");
    } else {
      console.log("Error in DB connection :" + err);
    }
  }
);


// const Order = require("./models/order.model");

// const userInput = {
//   username: "tomjerry12",
//   password: "abc",
// };

// const us = new User(userInput);
// us.save((err, doc) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("user is now in the database");
//   }
// });

// const order1 = {
//   products: [
//     {
//       _id: "5f31cf4384cfa5581b82da53",
//       name: "Journal",
//       price: 12.99,
//       quantity: 1,
//     },
//     {
//       _id: "5f31cf4384cfa5581b82da54",
//       name: "Mat",
//       price: 20.99,
//       quantity: 1,
//     },
//   ],
//   user: {
//     _id: "5f32b363f8fac45f55a77dac",
//     username: "tomjerry12",
//     password: "abc",
//   },
// };

// const data = new Order(order1);
// data.save((err, doc) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("good");
//   }
// });
app.listen(PORT, () => {
  console.log(`your server is running on port ${PORT}`);
});
