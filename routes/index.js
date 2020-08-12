const express = require("express");
const Product = require("../models/product.model");
const bodyParser = require("body-parser");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const Order = require("../models/order.model");
const jsonParser = bodyParser.json();

router.get("/products", (req, res) => {
  Product.collection.find().toArray((err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.json(item);
    }
  });
});

router.get("/products/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/product", jsonParser, (req, res) => {
  const product = req.body;
  const prod = new Product(product);
  prod.save((err, savedObj) => {
    if (err) {
      console.log(err);
    } else {
      res.send(product);
    }
  });
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  let user = await User.findOne({ username: username });
  if (user) {
    return res.status(400).send("That user already exisits!");
  } else {
    user = new User({
      username,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    res.send(user);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  let user = await User.findOne({ username: username });
  if (!user) {
    return res.status(400).send("Incorrect email or password.");
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).send("Incorrect email or password.");
  }

  const token = jwt.sign({ _id: user._id }, process.env.JWTSECRET);
  res.header("auth-token", token);

  res.send(true);
});

// router.post('/logout', (req,res) => {

// })

router.post("/order", (req, res) => {
  const cart = req.body;
  const order = new Order(cart);

  order.save((err, doc) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Order saved in database!");
    }
  });

  Order.aggregate([
    {
      $group: {
        _id: {
          username: { $username: "$username" },
          totalAmount: { $sum: { $multiply: ["$price", "$quantity"] } },
        },
      },
    },
  ]);
});

router.put("/product/:id", (req, res) => {
  const { name, price, quantity } = req.body;
  const id = req.params.id;

  Product.findOne({ _id: id }, (err, foundObj) => {
    if (err) {
      console.log(err);
    } else {
      if (!foundObj) {
        res.send(404).send("Product not found");
      } else {
        if (name) {
          foundObj.name = name;
        }
        if (price) {
          foundObj.price = price;
        }
        if (quantity) {
          foundObj.quantity = quantity;
        }
        foundObj.save((err, updatedObj) => {
          if (err) {
            console.log(err);
          } else {
            res.send(updatedObj);
          }
        });
      }
    }
  });
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  Product.deleteOne({ _id: id }, (err, foundObj) => {
    if (err) {
      console.log(err);
    } else {
      if (!foundObj) {
        res.send(404).send();
      } else {
        res.send("deleted");
      }
    }
  });
});

module.exports = router;
