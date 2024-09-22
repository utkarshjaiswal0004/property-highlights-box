const mongoose = require("mongoose");

const highlightSchema = new mongoose.Schema(
  {
    info: {
      type: String,
    },
    sequence: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Highlight = mongoose.model("Highlight", highlightSchema);

module.exports = Highlight;
