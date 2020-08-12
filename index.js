require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;
const shoproutes = require("./routes/index");
const cookieParser = require("cookie-parser");

app.use(bodyParser.json());
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

app.listen(PORT, () => {
  console.log(`your server is running on port ${PORT}`);
});
