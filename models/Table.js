const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  tableNo: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    enum: ["available", "occupied"],
    default: "available",
  },
});

module.exports = mongoose.model("Table", tableSchema);