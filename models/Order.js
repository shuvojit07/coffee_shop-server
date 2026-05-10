const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    tokenNo: {
      type: String,
      required: true,
    },

    tableNo: {
      type: Number,
      required: true,
    },

    customerName: {
      type: String,
    },

    items: [
      {
        name: String,
        quantity: Number,
        price: Number,
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["paid", "unpaid"],
      default: "unpaid",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);