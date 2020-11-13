const mongoose = require("mongoose");

mongoose.connect(process.env.DB, {
  useCreateIndex: false,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

module.exports = mongoose;
