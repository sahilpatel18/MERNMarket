const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  star: { type: [Number], min: 1, max: 5 },
  note: String,
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
