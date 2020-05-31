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
    type: Date,
    require: true,
    default: moment().format(),
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
