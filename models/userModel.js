const mongoose = require("mongoose");
const moment = require("moment");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
    default: moment().format("MMM Do YY"),
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
