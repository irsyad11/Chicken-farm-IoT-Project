const mongoose = require("mongoose");
const moment = require("moment-timezone");

const dateIndo = moment.tz(Date.now(), "Asia/Makassar");

const ShaSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  temperature: {
    type: Number,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
  },
  amonia: {
    type: Number,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

ShaSchema.pre("save", function (next) {
  this.created = dateIndo;
  next();
});

const Sha = mongoose.model("Sha", ShaSchema);
module.exports = Sha;
