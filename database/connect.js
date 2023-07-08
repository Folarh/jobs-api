const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.Connect(url);
};

module.exports = connectDB;
