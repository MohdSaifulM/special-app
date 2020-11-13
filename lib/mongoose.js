require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DB, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

module.exports = mongoose;
