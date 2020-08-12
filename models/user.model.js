const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.methods.joiValidate = function (obj) {
  const Joi = require("joi");
  const schema = {
    username: Joi.types.String().min(5).max(25).required(),
    password: Joi.types.String().min(6).max(255).required(),
  };
  return Joi.validate(obj, schema);
};



const User = mongoose.model("User", UserSchema);


module.exports = User;
