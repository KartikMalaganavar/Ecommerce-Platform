const mongoose = require("mongoose");

const mongodbUrl = process.env.MONGODB_URL;

const connectDB = () => {
  return mongoose.connect(mongodbUrl);
};

module.exports = { connectDB };