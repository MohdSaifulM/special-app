const moment = require("moment");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

//Called from document
todoSchema.methods.fromNow = function () {
  return `${moment(this.createdAt).fromNow()}`;
};

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
