const mongoose = require("mongoose");
const moment = require("moment");

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
  },
  type: {
    type: String,
    default: "personal",
  },
  date: {
    type: String,
    require: true,
    default: moment().format("MMM Do YY"),
  },
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
